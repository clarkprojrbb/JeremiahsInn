import React, { useState } from 'react';
import { Heart, CheckCircle, AlertCircle, Phone, Mail, FileDown, ChevronDown, ChevronUp, Activity, Sparkles } from 'lucide-react';
import {Link} from "react-router-dom";


export default function ResidentialTreatment() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-dark-blue">
            <div
                className="relative text-white py-20 px-4 bg-cover bg-center"
                style={{ backgroundImage: "url('/residential1.jpg')" }}
            >


                <div className="relative max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Rehabilitative Recovery Services</h1>
                    <p className="text-xl md:text-2xl text-white mb-4">Transforming Lives Through Comprehensive Treatment</p>
                    <p className="text-lg text-white max-w-3xl mx-auto">
                        Assisting over 100 men each year in making the necessary changes to their thinking and behavior that supports a recovered lifestyle
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <Heart className="w-8 h-8 text-light-blue mr-3"/>
                        <h2 className="text-3xl font-bold text-gray-800">Our Approach to Recovery</h2>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Jeremiah’s Inn Inc. assists over 100 men each year in making the necessary changes to their thinking and behavior that supports a recovered lifestyle. Recovery is so much more than staying abstinent from drugs and alcohol. At JI we use the American Society of Addiction Medicine’s (ASAM) criteria to formulate a comprehensive, individualized treatment plan with each patient. This evidence-based approach highlights an individuals strengths, while focusing on challenges they may face while working toward their personal recovery goals.

                        Scroll down for eligibility information and answers to FAQs.
                    </p>
                    <div className="text-center mb-12 mt-10">
                        <Link to="/program-form"
                                className="bg-light-orange text-dark-blue px-10 py-4 rounded-2xl text-xl font-bold hover:bg-amber-600 transition-colors shadow-lg">
                                Apply For Treatment
                        </Link>
                    </div>

                </div>
                <div className="bg-gradient-to-r from-dark-blue  to-blue-800 text-white rounded-lg p-6 mb-10 mt-20 text-center">
                    <p className="text-2xl md:text-3xl font-bold mb-2">100+ Men Annually</p>
                    <p className="text-blue-100">Making necessary lifestyle changes and learning to "Live
                        Recovery"</p>
                </div>


                {/* Eligibility Section */}
                <div className="bg-white rounded-lg shadow-lg mt-20 p-10 mb-8">
                    <div className="flex items-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-3"/>
                        <h2 className="text-3xl font-bold text-gray-800">Eligibility & Application Information</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Criteria</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0"/>
                                    <p className="text-gray-700">18 years and older</p>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0"/>
                                    <p className="text-gray-700">Stable medical and mental health status</p>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0"/>
                                    <p className="text-gray-700">Substance abuse/misuse diagnosis</p>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0"/>
                                    <p className="text-gray-700">Massachusetts resident</p>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0"/>
                                    <p className="text-gray-700">Willingness to change your life and a desire to remain
                                        substance free</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Required Documents</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-50 border-l-4 text-light-blue p-4">
                                    <p className="font-semibold text-dark-blue mb-1">1. Residential Program
                                        Application</p>
                                </div>
                                <div className="bg-blue-50 border-l-4 border-med-blue p-4">
                                    <p className="font-semibold text-dark-blue">2. Recent Bio-Psych-Social
                                        Evaluation</p>
                                    <p className="text-sm text-blue-800">No more than 6 months old with primary SUD
                                        diagnosis</p>
                                </div>
                                <div className="bg-blue-50 border-l-4 border-dark-blue p-4">
                                    <p className="font-semibold text-blue-900 mb-1">3. BSAS Approved Identification</p>
                                    <p className="text-sm text-blue-800">Bureau of Substance Addiction Services approved
                                        form</p>
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    window.open(
                                        "https://jeremiahsinn.com/wp-content/uploads/2020/10/Admission-Criteria.pdf",
                                        "_blank"
                                    )
                                }
                                className="bg-light-blue text-white font-bold py-2 mt-5 rounded hover:bg-med-blue transition-colors w-full flex items-center justify-center"
                            >
                                Download Admission Criteria
                            </button>
                        </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                        <div className="flex items-start">
                            <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0"/>
                            <div>
                                <p className="font-semibold text-red-900 mb-2">Important Notice:</p>
                                <ul className="list-disc pl-6 space-y-1 text-red-800">
                                    <li>Applications sent to the general email (info@) will not be processed</li>
                                    <li>Applications will not be processed until all required documents are received
                                    </li>
                                    <li>Per 42 CFR, part 2 and HIPAA, we cannot accept applications or PHI via email
                                    </li>
                                    <li>Applications are closed after 30 days of inactivity</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Process</h3>
                    <p className="text-gray-700 mb-6">There are 3 ways to submit an application for Residential
                        Treatment:</p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 text-center">
                            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3"/>
                            <h4 className="font-bold text-gray-800 mb-2">1. Online Application</h4>
                            <p className="text-sm text-gray-700 mb-4">Submit online and upload documents</p>
                            <Link
                                to="/program-form"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors w-full">
                                Apply Now
                            </Link>
                        </div>

                        <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 text-center">
                            <FileDown className="w-12 h-12 text-blue-600 mx-auto mb-3"/>
                            <h4 className="font-bold text-gray-800 mb-2">2. Fax Application</h4>
                            <p className="text-sm text-gray-700 mb-4">Download PDF and fax to: (508) 793-9568</p>
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
                            <h4 className="font-bold text-gray-800 mb-2">3. Mail Application</h4>
                            <p className="text-sm text-gray-700 mb-4">Download and mail to our address</p>

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

                    {/*contact sector - finished*/}
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                        <p className="font-semibold text-yellow-900 mb-3">To Check Application Status:</p>
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                            <a href="tel:+15087556403" className="flex items-center text-light-blue hover:underline">
                                <Phone className="w-5 h-5 mr-2"/>
                                (508) 755-6403 x 130
                            </a>
                            <a href="mailto:intake@jeremiahsinn.com"
                               className="flex items-center text-light-blue">
                                <Mail className="w-5 h-5 mr-2"/>
                                intake@jeremiahsinn.com
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-gray-800 mb-4">What Happens Next?</h4>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <div
                                    className="bg-med-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1
                                </div>
                                <p className="text-gray-700 pt-1">Applications are reviewed by case management team in
                                    order received</p>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="bg-med-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2
                                </div>
                                <p className="text-gray-700 pt-1">If approved, next step is an interview</p>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="bg-med-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3
                                </div>
                                <p className="text-gray-700 pt-1">After successful interview, applicants are placed on
                                    the waiting list</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-4 italic">Note: No one is added to the waiting list until
                            they have been interviewed by Jeremiah's Inn staff.</p>
                    </div>
                </div>


                {/*faq - update!*/}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <button
                            onClick={() => toggleFaq(1)}
                            className="w-full flex items-center justify-between text-left"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 pr-4">How does Jeremiah's Inn differ from
                                other programs?</h3>
                            {openFaq === 1 ? <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0"/> :
                                <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0"/>}
                        </button>
                        {openFaq === 1 && (
                            <div className="mt-4 text-gray-700 space-y-4">
                                <p>Addiction is a complex disease that affects the body, mind, and spirit. We offer a
                                    wide variety of activities aimed at helping our patients learn new coping strategies
                                    and techniques to aid them on their journey to lasting recovery.</p>

                                <div className="bg-blue-50 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-900 mb-2">Exercise & Physical Wellness</h4>
                                    <p className="text-blue-800">Exercise and meditation have proven to help prevent
                                        relapse and reduce withdrawal symptoms and drug cravings. All residents are
                                        welcome to attend small group exercise classes with Revive of the USA
                                        trainers—certified and insured fitness trainers with extensive experience in
                                        both fitness and recovery.</p>
                                </div>

                                <p>Residents are encouraged to join our team in the Worcester Co-ed Sober Softball
                                    League, attend group hikes, and access the YMCA just a short distance away.</p>
                            </div>
                        )}
                    </div>

                    {/*faq2 - updated*/}
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <button
                            onClick={() => toggleFaq(2)}
                            className="w-full flex items-center justify-between text-left"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 pr-4">What is the Holistic Approach?</h3>
                            {openFaq === 2 ? <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0"/> :
                                <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0"/>}
                        </button>
                        {openFaq === 2 && (
                            <div className="mt-4 text-gray-700 space-y-4">
                                <p>Holistic activities uniquely strengthen the mind-body-spirit connection that is so
                                    essential to becoming a healthy, happy, and fully integrated individual—which is the
                                    ultimate goal for anyone in recovery.</p>

                                <div className="grid md:grid-cols-2 gap-4 my-4">
                                    <div className="bg-green-50 border-l-4 border-green-600 p-4">
                                        <Activity className="w-8 h-8 text-green-600 mb-2"/>
                                        <h4 className="font-semibold text-green-900 mb-2">Meditation Classes</h4>
                                        <p className="text-green-800 text-sm">Research shows 30% reduction in relapse
                                            rates among participants who regularly practice meditation</p>
                                    </div>
                                    <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                                        <Sparkles className="w-8 h-8 text-purple-600 mb-2"/>
                                        <h4 className="font-semibold text-purple-900 mb-2">Reiki Sessions</h4>
                                        <p className="text-purple-800 text-sm">Weekly group meditation and individual
                                            Reiki sessions with Reiki Master Sylvia Murphy</p>
                                    </div>
                                </div>

                                <p>We also provide sober outings, volunteer opportunities with the Community Harvest
                                    Project and other local organizations, as well as awareness-raising events.</p>

                                <div className="bg-white rounded-lg p-4 mt-4">
                                    <p className="font-semibold text-gray-800 mb-2">Meet Sylvia Murphy - Reiki
                                        Master</p>
                                    <img
                                        src="/sylvia.jpg"
                                        alt="Sylvia Murphy"
                                        className="rounded-lg w-56 h-72 object-cover mx-auto mb-4"
                                    />

                                    <p className="text-gray-700 text-sm">Sylvia has been an educator for over 35 years
                                        and is a graduate of the Spiritual Guidance Program at the Unitarian
                                        Universalist Rowe Center. She holds a Master's Degree from the School of
                                        Theology and Ministry at Boston College and is certified in Reiki Master,
                                        Svaroopa Yoga, Ayurvedic Spirituality, and Sound Healing.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/*faq3 - updated */}
                    <div className="pb-4">
                        <button
                            onClick={() => toggleFaq(3)}
                            className="w-full flex items-center justify-between text-left"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 pr-4">What is Social Model Recovery?</h3>
                            {openFaq === 3 ? <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0"/> :
                                <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0"/>}
                        </button>
                        {openFaq === 3 && (
                            <div className="mt-4 text-gray-700 space-y-4">
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                                    <p className="text-blue-900 font-semibold mb-2">This model of treatment combines
                                        strong Case Management support with a peer-oriented program of experiential
                                        learning.</p>
                                </div>

                                <p>The Social Model works because it teaches people to "Live Recovery." Rooted in the
                                    principles and practices of the Twelve Steps of Recovery, which is the oldest recovery program
                                    in the US. The main focus of the house is "Living Recovery."</p>


                                <p>The Social Model allows patients to live in a safe, supportive, sober environment
                                    while learning to juggle their recovery, responsibilities at the house and with
                                    their family, and employment. When they complete the program, they have already
                                    established a routine, made connections, and became part of a community of
                                    support, which is paramount to continued sobriety.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-light-orange  to-med-blue rounded-lg shadow-lg p-8 mb-8 text-white font-bold">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xl md:text-2xl italic mb-4">
                            "When I came to JI I thought I was going to a treatment facility—I was really entering a
                            family. Everyone there was involved in, and cared about my treatment. I've built lifelong
                            friendships through JI and I LOVE everyone there. Thank you JI."
                        </p>
                        <p className="text-lg font-semibold text-blue-200">— Kenny P.</p>
                    </div>
                </div>

                <div className="flex items-center mb-6">
                    <AlertCircle className="w-8 h-8 text-light-orange mr-3"/>
                    <h2 className="text-3xl font-bold text-white">Additional Resources</h2>
                </div>

                <div className="bg-orange-50 border-l-4 border-light-orange p-4 mb-6">
                    <p className="text-orange-900 font-semibold">Please Note: We are not a homeless shelter.</p>
                    <p className="text-orange-800 mt-2">If you are experiencing homelessness or seeking emergency
                        shelter, please use the resources below.</p>
                </div>

                <div className="space-y-4">
                    <div className="border-b pb-4">
                        <h3 className="font-bold text-white mb-1">Massachusetts Substance Abuse Helpline</h3>
                        <p className="text-off-white text-sm mb-2">Free, confidential information and referrals for
                            those with alcohol and drug problems seeking help.</p>
                        <a href="tel:+18003275050" className="text-white font-bold">Call
                            (800) 327-5050</a>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="font-bold text-white">Addiction Resource Website</h3>
                        <p className="text-off-white text-sm">Resources for substance use disorders including signs,
                            symptoms, levels of care, and self-assessment tools.</p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="font-bold text-white mb-1">SAMHSA (Substance Abuse and Mental Health
                            Services Administration)</h3>
                        <p className="text-off-white text-sm">Wealth of information, publications, data, resources,
                            and treatment locator for your area.</p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="font-bold text-white mb-1">Stigma Free Worcester</h3>
                        <p className="text-off-white text-sm">Smart phone app connecting users with substance use,
                            mental health, food, and shelter services in Worcester. Developed by WPI students in
                            collaboration with the City of Worcester.</p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="font-bold text-white mb-1">Make the Connection</h3>
                        <p className="text-off-white text-sm">Connects Veterans, family members, and advocates with
                            mental health information and inspiring stories of recovery at maketheconnection.net</p>
                    </div>

                    <div className="pb-4">
                        <h3 className="font-bold text-white mb-1">Bureau of Substance Abuse Services (BSAS)</h3>
                        <p className="text-off-white text-sm">Oversees statewide prevention, intervention, treatment,
                            and recovery support services. Licenses programs, funds services, and tracks treatment
                            trends.</p>
                    </div>
                </div>




                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Homelessness Resources:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>• National Coalition for the Homeless</li>
                        <li>• Massachusetts Housing and Shelter Alliance</li>
                        <li>• National Coalition for Homeless Veterans Resource Locator</li>
                        <li>• HUD Resource Locator</li>
                        <li>• National Law Center on Homelessness & Poverty</li>
                        <li>• SMOC's Greater Worcester Housing Connection</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}