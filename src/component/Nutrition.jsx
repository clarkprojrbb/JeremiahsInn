import React from 'react';
import { Phone, Mail, MapPin, Clock, Users, Heart, AlertCircle, CircleMinus} from 'lucide-react';

export default function NutritionCenter() {
    return (
        <div className="min-h-screen bg-white">
            <div
                className="relative text-white py-20 px-4 bg-cover bg-center"
                style={{ backgroundImage: "url('/nutrfront.jpg')" }}
            >

                <div className=" text-white py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nutrition Center Services</h1>
                        <p className="text-xl text-blue-100">Emergency food assistance for individuals and families in need</p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">

                {/*notice sect*/}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center mb-4">
                        <CircleMinus className="w-6 h-6 text-red-400 mr-2" />
                        <h2 className="text-2xl font-bold text-orange-600">Notice</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-orange-600">Nutrition Center Updates:</h2>
                            <p>Closed on December 24th & 25th for the Christmas Holiday.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-orange-600">Centro de Nutrición Actualizaciones:</h2>
                            <p>Cerrado el 24 y 25 de diciembre por las vacaciones de Navidad.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Mail className="w-5 h-5 text-light-blue mr-3 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Katherine Barrera</p>
                                    <a href="mailto:katherine@jeremiahsinn.com" className="text-light-blue hover:underline">
                                        katherine@jeremiahsinn.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="w-5 h-5 text-light-blue mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Ailyn Rodriguez</p>
                                    <a href="mailto:ailyn.santiago@jeremiahsinn.com" className="text-light-blue hover:underline">
                                        ailyn.santiago@jeremiahsinn.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Phone className="w-5 h-5 text-light-blue mr-3 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <a href="tel:+15087556403" className="text-light-blue hover:underline">
                                        (508) 755-6403 x 190
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-light-blue mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Location</p>
                                    <p className="text-gray-700">1059 Main Street, Worcester, MA 01603</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*hours sect*/}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center mb-4">
                        <Clock className="w-6 h-6 text-light-blue mr-2" />
                        <h2 className="text-2xl font-bold text-gray-800">Hours of Operation</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-semibold">Monday</span>
                                <span>9:00 AM - 10:30 AM</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-semibold">Tuesday</span>
                                <span>9:00 AM - 2:00 PM</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-semibold">Wednesday</span>
                                <span className="text-orange-600">Clark Students Only 12:30-3:30 PM</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-semibold">Thursday</span>
                                <span>9:00 AM - 2:00 PM</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-semibold">Friday</span>
                                <span>9:00 AM - 2:00 PM</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-semibold">Weekend</span>
                                <span className="text-gray-500">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*elig*/}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center mb-4">
                        <AlertCircle className="w-6 h-6 text-light-blue" />
                        <h2 className="text-2xl font-bold text-gray-800">Emergency Food Pantry Eligibility</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-blue-50 border-l-4 border-light-blue p-4">
                            <p className="font-semibold text-med-blue">Service Area Zip Codes:</p>
                            <p className="text-dark-blue text-lg">01602, 01603, 01610</p>
                        </div>

                        <div className="prose max-w-none">
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">Who Qualifies:</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Each household may visit once per month</li>
                                <li>USDA commodities available as needed</li>
                                <li>Income eligibility determined by TEFAP guidelines</li>
                                <li>Automatic qualification for recipients of: Medicaid (MA Health), SNAP, EAEDC, WIC, Free or Reduced School Meals, or Summer Feeding Programs</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-800 mt-6">Required Documents:</h3>
                            <p className="text-gray-700 mb-2">Please bring one of the following:</p>
                            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                <li>Jeremiah's Inn Blue Card (new clients receive this upon first visit)</li>
                                <li>Documents proving residency in service area (zip codes: 01602, 01603, 01610)</li>
                            </ol>

                            <h3 className="text-lg font-semibold text-gray-800 mt-6">Accepted Documents:</h3>
                            <p className="text-gray-700">Any mail with your name and address, such as monthly bills, health insurance cards, rental agreements, or referral letters.</p>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-600 p-4 mt-4">
                            <p className="text-green-900">
                                <span className="font-semibold">Please Note:</span> We kindly ask that clients bring their own bags when possible. We accept donations of reusable shopping bags and totes.
                            </p>
                        </div>
                    </div>
                </div>

                {/*to fix */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Food Pantry Appointments</h2>
                    <p className="text-gray-700 mb-4">In an effort to maintain a safe environment for all guests, we use an appointment system.</p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <h3 className="font-semibold text-yellow-900 mb-2">Important Information:</h3>
                        <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                            <li>Must be an established guest with a blue card/guest number</li>
                            <li>Appointments cancelled if JI number not provided</li>
                            <li>New guests must complete in-person intake first</li>
                            <li>Appointment guests receive pre-packaged boxes only</li>
                            <li>May request 1-3 items (we'll accommodate if possible)</li>
                            <li>No substitutions or shopping available</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <p className="text-gray-700"><span className="font-semibold">Español:</span> Para obtener más información sobre la elegibilidad y programación de citas para la despensa de alimentos,
                            <a href="https://docs.google.com/document/d/1VDWz0foYANHhRC7NTbcx680zcnG05gwh/edit" className="text-light-blue hover:underline font-semibold">
                                HAGA CLIC AQUÍ
                            </a></p>
                        <p className="text-gray-700"><span className="font-semibold">Português:</span> Para saber mais sobre os critérios de elegibilidade e agendamento para o Banco de Alimentos,
                            <a href="https://docs.google.com/document/d/1VDWz0foYANHhRC7NTbcx680zcnG05gwh/edit" className="text-light-blue hover:underline font-semibold">
                                CLIQUE AQUI
                            </a></p>
                        <p className="text-gray-700"><span className="font-semibold">Tiếng Việt:</span> Để tìm hiểu về điều kiện tham gia và lịch hẹn của Food Pantry,
                            <a href="https://docs.google.com/document/d/1VDWz0foYANHhRC7NTbcx680zcnG05gwh/edit" className="text-light-blue hover:underline font-semibold">
                                hãy NHẤP VÀO ĐÂ
                            </a></p>
                        <p className="text-gray-700"><span className="font-semibold">Kreyòl:</span> Pou aprann plis sou kalifikasyon pou Randevou Food Pantry ak pwogramasyon,
                            <a href="https://docs.google.com/document/d/1VDWz0foYANHhRC7NTbcx680zcnG05gwh/edit" className="text-light-blue hover:underline font-semibold">
                                KLIK ISIT LA
                            </a></p>
                        <p className="text-gray-700"><span className="font-semibold">Русский:</span> Чтобы узнать о праве на получение продовольственного клада и графике приема,
                            <a href="https://docs.google.com/document/d/1VDWz0foYANHhRC7NTbcx680zcnG05gwh/edit" className="text-light-blue hover:underline font-semibold">
                                ЩЕЛКНИТЕ ЗДЕСЬ
                            </a></p>
                    </div>
                </div>


                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-dark-blue shadow-md p-6 text-center">
                        <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-3xl font-bold text-white">32,222</h3>
                        <p className="text-off-white">People Served in 2024</p>
                    </div>
                    <div className="bg-dark-blue rounded-lg shadow-md p-6 text-center">
                        <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
                        <h3 className="text-3xl font-bold text-white">10,000</h3>
                        <p className="text-off-white">Households Helped</p>
                    </div>
                    <div className="bg-dark-blue rounded-lg shadow-md p-6 text-center">
                        <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h3 className="text-3xl  text-white font-bold mb-2">33%</h3>
                        <p className="text-off-white">Children Served</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-light-orange rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-dark-blue text-center mb-3">Children</h3>
                        <p className="text-gray-700">One-third of our guests are children of low-income families who receive benefits through programs like SNAP, WIC, and School Meal Programs. We want to make sure that all our neighbors have what they need to grow and thrive.</p>
                        <figure>
                            <img
                                src="/nutr1.jpg"
                                alt="" />
                        </figure>
                    </div>

                    <div className="bg-light-orange rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-dark-blue text-center mb-3">Seniors</h3>
                        <p className="text-gray-700">Roughly 30% of our clients are over the age of 55. Many report that some months they have to choose between life-saving medications and food.</p>
                        <figure>
                            <img
                                src="/nutr2.jpg"
                                alt="" />
                        </figure>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Partnerships</h2>
                    <p className="text-gray-700">We are grateful to partner with a variety of local agencies that generously donate fresh, seasonal, locally grown produce, dairy, protein, bread, and other pantry staples. Their contributions help us nourish both local families in need and the residents at the Inn, ensuring everyone has access to wholesome, high-quality food. These partnerships are a vital part of our mission, and we deeply appreciate their continued support in strengthening our community.
                        <figure className=" flex justify-center">
                            <img
                                src="/partnernutr.png"
                                alt=""
                                className="rounded-lg shadow-md"
                                style={{ maxWidth: "500px", width: "100%" }}
                            />
                        </figure></p>
                </div>

                {/*res*/}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
                    <div className="space-y-2">
                        <a href="http://www.FoodHelpWorcester.org" className="block text-light-blue hover:underline">Worcester County Food Bank Resource Locator</a>
                        <p className="text-gray-700">Project Bread FoodSource Hotline: <a href="tel:+18006458333" className="text-light-blue hover:underline">1-800-645-8333</a> (TTY: 1-800-377-1292)</p>
                        <p className="text-gray-700">Worcester WIC Program (Family Health Center, 199 Chandler Street): <a href="tel:+15087625700" className="text-light-blue hover:underline">(508) 762-5700</a></p>
                        <p className="text-gray-700">SNAP (Worcester Community Action Council, 484 Main Street): <a href="tel:+15087541176" className="text-light-blue hover:underline">(508) 754-1176</a></p>
                        <p className="text-gray-700">USDA Hunger Hotline: <a href="tel:+18663486479" className="text-light-blue hover:underline">1-866-3-HUNGRY</a></p>
                        <p className="text-gray-700">Mass 211: Dial 211 for resources</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
