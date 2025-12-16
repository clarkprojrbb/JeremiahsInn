import React from "react";
import { Heart, Users, GraduationCap } from 'lucide-react';

import { Link } from "react-router-dom";


const programs=[
    {name: "Nutrition Center Assistant", desc:"We are always looking for volunteers to work 2-4 hr shifts in the food pantry M 12p-3, Tu, Th, Fri 9a-2. Duties include stocking and organizing shelves, distributing food, performing client intakes, and smiling! Having basic computer skills and the ability to lift 25 lbs is helpful, but reasonable accommodations can always be made. If you are interested in helping out, complete the Volunteer Application.", src:"/img1.jpg"},
    {name: "Evening Meal Program (EMP)", desc:"This is an opportunity for individuals groups of 10 or less to help our residents feel more at home during their stay at JI. Prepare your favorite dish and drop it off or prepare here in our restaurant-style kitchen. Please see the most frequently asked questions below. If you have already submitted your Volunteer Application you can just visit our SignUp.com page anytime to schedule a meal drop-off on our EMP calendar.", src:"/img2.jpg"},
    {name: "Workshops & Job Skills Training for Residents", desc: "If you have a passion for recovery and are looking for a great way to give back, we are seeking individuals or groups to volunteer their time and talent. Our residents face many challenges, such as finding gainful employment. Sometimes it is just because they lack the training and skills they need to apply. If you have experience in job skills training, resume building, basic computer skills, financial literacy, credit building, etc., or ESL contact Alyssa at (508) 755-6403 Ext. 110 to see how your experience can benefit others!", src:"/img3.jpeg"} ]


export default function Volunteer() {
    return (
        <div className="min-h-screen bg-blue-100">
            <div
                className="relative text-white py-20 px-6 bg-cover bg-center"
                style={{ backgroundImage: "url('/volunteerfrontpage.jpg')" }}
            >
                <div className="text-light-orange py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Volunteering Opportunities
                        </h1>
                        <p className="text-xl text-light-orange">
                            Lend a hand. Change a life at Jeremiah’s Inn
                        </p>
                    </div>
                </div>
            </div>

            <section className="mt-10">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">
                            Why Volunteer With Us?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="w-10 h-10 text-med-blue" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-blue mb-3">
                                    Build Skills
                                </h3>
                                <p className="text-med-blue">
                                    Boost your leadership and teamwork skills through meaningful work
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-blue mb-3">
                                    Expand Network
                                </h3>
                                <p className="text-med-blue">
                                    Build meaningful relationships and expand your professional network
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-10 h-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-blue mb-3">
                                    Make Impact
                                </h3>
                                <p className="text-med-blue">
                                    Feel good knowing you're making a real difference
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10 justify-center">

                            <button
                                onClick={() =>
                                    window.open(
                                        "https://docs.google.com/document/d/1gNHyqiJYiHo7ukMZYrTUFPHgfZp0smOhBAOFN9lrSiQ/edit?usp=sharing",
                                        "_blank"
                                    )

                                }
                                className="rounded-full px-7 py-3 border-2 border-dark-blue text-dark-blue font-bold uppercase hover:bg-dark-blue hover:text-white transition"
                            >
                                FAQ
                            </button>

                            <Link
                                to="/volunteer-form"
                                className="rounded-full px-7 py-3 bg-dark-blue text-white font-bold uppercase hover:opacity-90 transition"
                            >
                                Apply
                            </Link>
                        </div>
                    </div>

                    {programs.map((program, i) => (
                        <div key={i} className="py-10">
                            <div className="lg:flex lg:items-center lg:-mx-6">
                                <div className="lg:w-1/2 lg:px-6">
                                    <div className="w-full h-80 rounded-lg overflow-hidden">
                                        <img
                                            src={program.src}
                                            alt={program.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                                    <h3 className="text-4xl font-semibold">{program.name}</h3>
                                    <p className="mt-6 text-gray-600">{program.desc}</p>

                                    <Link
                                        to="/volunteer-form"
                                        className="inline-block mt-6 rounded-full px-7 py-3 bg-light-orange text-dark-blue font-bold uppercase hover:opacity-90 transition"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}





