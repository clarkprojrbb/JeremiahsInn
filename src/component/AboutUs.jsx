import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Loader2, AlertCircle } from 'lucide-react';

// Reusable component for displaying contact details
const ContactItem = ({ Icon, text, href }) => (
    <a href={href} className="flex items-start mb-2 hover:opacity-80 transition"
       target={href && href.startsWith('http') ? "_blank" : "_self"}
       rel="noopener noreferrer"
    >
        <Icon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-light-orange" />
        <p className="text-light-orange text-lg break-words">{text}</p>
    </a>
);


// Card component to display individual staff or board members
const KeyPersonnelCard = ({ name, title, imageSrc, description, email, phone }) => {
    return (
        <div className="max-w-none w-full mx-auto shadow-xl rounded-lg bg-white overflow-hidden my-4 font-sans border border-gray-100 transition-all hover:shadow-2xl">
            <div className="flex flex-col sm:flex-row items-stretch">
                {/* Image / Placeholder */}
                <div className="w-full sm:w-1/4 flex-shrink-0 h-48 sm:h-auto bg-blue-100 flex items-center justify-center">
                    <img
                        className="w-full h-full object-cover"
                        src={imageSrc}
                        alt={`Profile of ${name}`}
                        // Fallback image handling
                        onError={(e) => {
                            e.target.onerror = null;
                            const initials = (name.split(' ').map(n => n[0]).join('')).substring(0, 2);
                            // Fallback to a clear placeholder image URL
                            // We use a safe placeholder here, as the previous fallback failed
                            e.target.src = `https://placehold.co/400x400/BFDBFE/1D4ED8?text=${initials}`;
                        }}
                    />
                </div>

                <div className="w-full sm:w-3/4 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-med-blue leading-tight mb-1">{name}</h3>
                    <p className="text-sm font-semibold text-light-orange uppercase mb-3">{title}</p>
                    {/* Only show description if provided by the API */}
                    {description && (
                        <p className="text-off-black leading-snug mb-3">
                            {description}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        {email && (
                            <ContactItem Icon={Mail} text={email} href={`mailto:${email}`} />
                        )}
                        {phone && (
                            <ContactItem Icon={Phone} text={phone} href={`tel:${phone}`} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main application component
const App = () => {
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // IMPORTANT: Define the absolute API URL here, matching your server's port 3000
    const API_URL = 'http://localhost:4000/api/people';
    // NEW: Define the base URL for static images on the Node server
    const BASE_IMAGE_URL = 'http://localhost:4000';

    // Effect to handle data fetching from the Node API with exponential backoff
    useEffect(() => {
        // Load the Inter font for a modern look
        const link = document.createElement('link');
        link.href = '[https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap)';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const fetchPeople = async () => {
            const MAX_RETRIES = 3;
            const BASE_DELAY_MS = 1000;

            for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
                try {
                    setIsLoading(true);

                    // Exponential Backoff
                    if (attempt > 1) {
                        const delay = BASE_DELAY_MS * Math.pow(2, attempt - 2);
                        // Update error state to show retry message
                        setError(`Connection attempt failed. Retrying in ${delay / 1000}s... (Attempt ${attempt}/${MAX_RETRIES})`);
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }

                    const response = await fetch(API_URL);

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const data = await response.json();
                    setPeople(data);
                    setError(null); // Clear error on successful fetch
                    return; // Exit loop

                } catch (e) {
                    if (attempt === MAX_RETRIES) {
                        // Final, persistent error message
                        setError(`Could not load staff and board information. Please ensure the Node server is running on ${API_URL}`);
                    }
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchPeople();
    }, []);

    // Function to handle conditional rendering of content (loading, error, data)
    const renderContent = () => {
        if (isLoading && people.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center p-12 text-med-blue">
                    <Loader2 className="w-8 h-8 animate-spin mb-3" />
                    <p className="text-lg">Loading staff and board members...</p>
                    {error && <p className="text-sm text-light-orange mt-2">{error}</p>}
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex flex-col items-center justify-center p-8 bg-red-100 rounded-lg border border-red-300 text-red-800">
                    <AlertCircle className="w-8 h-8 mb-3" />
                    <p className="text-lg font-medium text-center">{error}</p>
                </div>
            );
        }

        if (people.length === 0) {
            return (
                <div className="p-12 text-center text-off-black bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-lg font-medium">No personnel records found.</p>
                </div>
            );
        }

        return (
            <div className="grid sm:grid-cols-1 gap-6">
                {people.map((person) => {
                    // NEW LOGIC: Prepend the base server URL if the image path is relative
                    // This ensures the browser looks at http://localhost:3000/path/to/image.jpg
                    const imagePath = person.src && !person.src.startsWith('http')
                        ? `${BASE_IMAGE_URL}${person.src}`
                        : person.src;

                    return (
                        <KeyPersonnelCard
                            key={person._id || person.name}
                            name={person.name}
                            title={person.title}
                            description={person.desc}
                            imageSrc={imagePath || `https://placehold.co/400x400/BFDBFE/1D4ED8?text=PICTURE`}
                            email={person.email}
                            phone={person.phone}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header Section - Modern and bold */}
            <header className="bg-med-blue text-white py-20 shadow-lg">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <p className="text-base font-semibold text-light-orange uppercase tracking-widest mb-2">Our Mission</p>
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
                        About Jeremiah's Inn
                    </h1>
                    <p className="text-xl max-w-3xl text-off-white">
                        Since 1983, we have been committed to empowering individuals and families through recovery programs and essential nutrition services.
                    </p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                {/* Mission and Contact Grid */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-med-blue mb-4">Our History and Vision</h2>
                        <p className="text-off-black mb-4 leading-relaxed">
                            Jeremiah's Inn began with a simple vision: to provide a safe, supportive place where men could reclaim their lives from addiction. Today, we stand as a beacon of hope, expanding our reach to combat food insecurity through our expansive Nutrition Center, ensuring the community can thrive.
                        </p>
                        <p className="text-off-black leading-relaxed italic border-l-4 border-light-orange pl-4">
                            "Helping people through our Social Model Recovery Program and Nutrition Center."
                        </p>
                    </div>

                    <div className="md:col-span-1 bg-med-blue p-6 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>

                        {/* Main Organization Contact Info */}
                        <ContactItem Icon={Phone} text="(508) 755-6403" href="tel:5087556403" />
                        <ContactItem Icon={Mail} text="info@jeremiahsinn.org" href="mailto:info@jeremiahsinn.org" />
                        <ContactItem Icon={MapPin} text="Worcester, MA 01602" href="[https://maps.app.goo.gl/example](https://maps.app.goo.gl/example)" />
                    </div>
                </div>

                {/* Staff Directory Section */}
                <h2 className="text-3xl font-bold text-med-blue mb-8 pt-8 border-t border-off-white">
                    Staff & Board of Members
                </h2>

                {renderContent()}

            </main>
        </div>
    );
};

export default App;