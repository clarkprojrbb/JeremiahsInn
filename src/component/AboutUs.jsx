import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactItem = ({ Icon, text }) => (
    <div className="flex items-start mb-2">
        <Icon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-light-orange" />
        <p className="text-light-orange text-lg">{text}</p>
    </div>
);


const KeyPersonnelCard = ({ title, role, imageSrc, description }) => {
    return (

        <div className="max-w-none w-full mx-auto shadow-xl rounded-lg bg-white overflow-hidden my-4 font-sans">
            <div className="flex flex-row items-stretch h-50">
                <div className="w-1/3 flex-shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src={imageSrc}
                        alt={`Profile of ${title}`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/400x400/1D4ED8/FFFFFF?text=Profile";
                        }}
                    />
                </div>

                <div className="w-2/3 p-3 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-med-blue leading-tight truncate">{title}</h3>
                    <p className="text-xs font-semibold text-light-orange uppercase mb-1">{role}</p>
                    <p className="text-off-black leading-snug text-xs line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const App = () => {

    const teamMembers = [
        {
            title: "John Doe",
            role: "Executive Director",
            description: "Dedicated to the mission of Jeremiah's Inn, John oversees all operations and strategic planning.",
            imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
        },
        {
            title: "Jane Smith",
            role: "Nutrition Center Manager",
            description: "Jane ensures all families receive high-quality, nutritious food through our pantry and community programs.",
            imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">

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

                    <div className="md:col-span-1 bg-med-blue p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                        <ContactItem Icon={Phone} text="(508) 755-6403" />
                        <ContactItem Icon={Mail} text="info@jeremiahsinn.org" />
                        <ContactItem Icon={MapPin} text="Worcester, MA 01602" />
                    </div>
                </div>


                <h2 className="text-3xl font-bold text-med-blue mb-8 pt-8 border-t border-off-white">
                    Staff & Board of Members
                </h2>


                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                    {teamMembers.map((member, index) => (
                        <KeyPersonnelCard key={index} {...member} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default App;