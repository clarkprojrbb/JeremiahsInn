import React from "react";
import { Mail, FileDown, CheckCircle } from 'lucide-react';
import { useState } from "react";


function ImageCarousel() {
    const images = [
        "/recovery2.jpg",
        "/recovery3.jpg",
        "/recovery4.jpg",
    ];

    const [current, setCurrent] = useState(0);
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className="relative w-full overflow-hidden rounded-lg">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >{images.map((src, index) => (
                <div key={index} className="min-w-full">
                    <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[28 rem] object-cover"
                    />
                </div>
            ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
            >❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
            >
                ❯
            </button>
        </div>
    );
}


export default function RecoveryResidence() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div
                className="relative text-white py-20 px-6 bg-cover bg-center"
                style={{ backgroundImage: "url('/recovery1.jpg')" }}
            >
                <div className=" text-white py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recovery Residence Program</h1>
                        <p className="text-xl text-blue-100">Emergency food assistance for individuals and families in need</p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-med-blue rounded-lg shadow-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <h2 className="text-3xl font-bold text-white">Welcome to Jeremiah's House</h2>
                    </div>

                    <p className="text-2xl text-off-white leading-relaxed mb-6">
                        A beautiful 16-bed property for men in recovery from Substance Use Disorder (SUD), conveniently located on Highland Street in Worcester.
                    </p>

                    <div className="bg-orange-100 border-l-4 border-light-orange p-6 rounded">
                        <p className="text-gray-800 text-xl leading-relaxed">
                            Jeremiah's Inn Inc. has been offering comprehensive, patient-centered SUD treatment services at the <span className="font-semibold">ASAM 3.1 level of care</span> for over 30 years. Jeremiah's House was opened in 2022 in response to the severe lack of safe housing in our community that supports the recovery of patients completing this level of care.
                        </p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <ImageCarousel />
                </div>
                <h2 className="text-3xl font-bold text-dark-blue mb-6 text-center">Why Jeremiah's House?</h2>

                <div className="space-y-4">
                    <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-dark-blue mb-2">Safe & Supportive Environment</h3>
                            <p className="text-med-blue">A secure, welcoming space designed specifically to support men in their recovery journey from substance use disorder.</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-dark-blue   mb-2">Proven Track Record</h3>
                            <p className="text-med-blue">Over three decades of experience providing patient-centered treatment at the ASAM 3.1 level of care.</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-dark-blue   mb-2">Community Response</h3>
                            <p className="text-med-blue">Opened in 2022 to address the critical shortage of safe recovery housing in Worcester and surrounding areas.</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-dark-blue mb-2">Convenient Location</h3>
                            <p className="text-med-blue">Easily accessible location on Highland Street in Worcester, close to resources and support services.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-light-orange rounded-lg shadow-lg p-8 mb-8 mt-8">
                    <h2 className="text-3xl font-bold text-dark-blue text-center">Learn more about the recovery program</h2>
                    <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                        <iframe
                            className="w-full rounded-lg shadow-md mt-6"
                            style={{ height: '350px' }}
                            src="https://www.youtube.com/embed/risIasQOf2k"
                            title="Jeremiah's House Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="bg-white shadow-lg p-8 mt-10">
                    <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center">Application Process</h3>
                    <p className="text-dark-blue mb-6 text-center">There are 3 ways to submit an application for Residential
                        Treatment:</p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 text-center">
                            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3"/>
                            <h4 className="font-bold text-dark-blue">1. Online Application</h4>
                            <p className="text-sm text-med-blue mb-4">Submit online and upload documents</p>
                            <a href="/program-form">
                                <button
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors w-full">
                                    Apply Now
                                </button>
                            </a>
                        </div>

                        <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 text-center">


                            <FileDown className="w-12 h-12 text-blue-600 mx-auto mb-3"/>
                            <h4 className="font-bold text-dark-blue mb-2">2. Fax Application</h4>
                            <p className="text-sm text-med-blue mb-4">Download PDF and fax to: (508) 793-9568</p>
                            <button
                                onClick={() =>
                                    window.open(
                                        "https://jeremiahsinn.com/wp-content/uploads/2024/10/Resident-Application-Process-Updated-2024-3.pdf",
                                        "_blank"
                                    )

                                }
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full"
                            >
                                Download PDF
                            </button>

                        </div>

                        <div className="bg-purple-50 border-2 border-purple-600 rounded-lg p-6 text-center">
                            <Mail className="w-12 h-12 text-purple-600 mx-auto mb-3"/>
                            <h4 className="font-bold text-dark-blue mb-2">3. Mail Application</h4>
                            <p className="text-sm text-med-blue mb-4">Download and mail to our address</p>

                            <button
                                onClick={() =>
                                    window.open(
                                        "https://jeremiahsinn.com/wp-content/uploads/2024/10/Resident-Application-Process-Updated-2024-3.pdf",
                                        "_blank"
                                    )
                                }
                                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors w-full"
                            >
                                Download PDF
                            </button>

                        </div>
                    </div>


                    <div className="flex items-center justify-center">
                        <Mail className="w-6 h-6 text-med-blue mr-3" />
                        <div className="text-center">
                            <p className="text-gray-700 mb-1">Submit completed applications to:</p>
                            <a
                                href="mailto:SoberLiving@JeremiahsInn.com"
                                className="text-med-blue hover:underline text-lg font-semibold"
                            >
                                SoberLiving@JeremiahsInn.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        Questions about the application process? Contact us at{' '}
                        <a href="mailto:SoberLiving@JeremiahsInn.com" className="text-dark-blue hover:underline">
                            SoberLiving@JeremiahsInn.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
