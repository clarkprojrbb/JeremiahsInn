import React from "react";
import { Link } from "react-router-dom";

export default function Donate() {
    return (
        <div>
            <div className="bg-white px-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="flex max-w-xl flex-col items-start justify-between">
                            <p className="text-sm text-off-black">
                                Here at Jeremiah’s Inn we house two programs under one roof.
                            </p>
                            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                                Support Hope and Healing in Worcester
                            </h2>
                            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                <div className="flex max-w-xl flex-col items-start justify-between">
                                    <img
                                        src="/associations.png"
                                        alt="associates"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="flex max-w-xl flex-col items-start justify-between">
                                    <p className="text-sm text-off-black">
                                        Honorable mention of our partners. Their support of the Jeremiah’s Inn mission helps provide relief and comfort to the community.
                                        P.O. Box 30035, Worcester, MA 01603
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex max-w-xl flex-col items-start justify-between">
                            <img
                                src="/donation.png"
                                alt="Volunteers preparing donations"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <main className="text-dark-blue">
                <section className="pb-10 pt-20 lg:py-10">
                    <p className="text-3xl font-bold text-center text-dark-blue sm:text-5xl lg:pb-10">
                        Where &amp; What We Accept
                    </p>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                            <article className="bg-white rounded-3xl flex flex-col overflow-hidden">
                                <div className="flex flex-1 flex-col p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-dark-blue">In-Kind Donations</h3>
                                    <p className="text-med-blue text-sm flex-1">
                                        Drop off pantry staples Mon 9-12:30 &amp; Tue/Thu/Fri 9-2 or call (508) 755-6403 x110
                                        to schedule another time. Check our Amazon wishlist for seasonal needs.
                                    </p>
                                    <Link
                                        to="#"
                                        className="inline-flex justify-center rounded-full bg-dark-blue px-6 py-3 text-white text-sm font-semibold uppercase tracking-wide shadow hover:bg-white hover:text-dark-blue hover:border-dark-blue border-2 border-transparent hover:border-2 transition"
                                    >
                                        View Wishlist
                                    </Link>
                                </div>
                            </article>
                            <article className="bg-white rounded-3xl flex flex-col overflow-hidden">
                                <div className="flex flex-1 flex-col p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-dark-blue">Online &amp; Check Donations</h3>
                                    <p className="text-med-blue text-sm flex-1">
                                        Make checks payable to Jeremiah’s Inn and mail to P.O. Box 30305 Worcester, MA 01603.
                                        Prefer digital giving? Use our secure online portal anytime.
                                    </p>
                                    <a
                                        href="https://jeremiahsinn.kindful.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex justify-center rounded-full bg-dark-blue px-6 py-3 text-white text-sm font-semibold uppercase tracking-wide shadow hover:bg-white hover:text-dark-blue hover:border-dark-blue border-2 border-transparent hover:border-2 transition"
                                    >
                                        Donate Online
                                    </a>
                                </div>
                            </article>
                            <article className="mb-10 h-full overflow-hidden rounded-lg bg-white shadow-1 border duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                                <div className="flex flex-1 flex-col p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-dark-blue">Memorial Donations</h3>
                                    <p className="text-med-blue text-sm flex-1">
                                        Celebrate milestones or honor loved ones. Provide recipient contact details and we’ll
                                        send acknowledgement on your behalf with heartfelt gratitude.
                                    </p>
                                    <Link
                                        to="#"
                                        className="inline-block rounded-full px-7 py-3 mx-auto
                        border-2 border-dark-blue bg-dark-blue text-centered font-bold
                        text-white transition duration-300 uppercase
                        hover:bg-off-white hover:text-dark-blue hover:border-dark-blue
                        shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                                    >
                                        Make a Memorial Gift
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-off-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="relative rounded-[32px] overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-dark-blue/80" />

                            <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
                                <div className="mb-6">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                        Nutrition &amp; Residential program needs
                                    </h3>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="bg-[#27356f] rounded-2xl p-6 text-white text-sm space-y-3">
                                        <h4 className="text-lg font-semibold">Nutrition program needs</h4>
                                        <ul className="space-y-1.5">
                                            <li>Sterilite Stackable Totes 72 Qt</li>
                                            <li>Rubber gloves</li>
                                            <li>Large cardboard boxes</li>
                                            <li>Plastic grocery bags or tote bags</li>
                                            <li>Vegan, gluten-free &amp; allergen-free items</li>
                                            <li>Boxed meals, canned meats, soups</li>
                                            <li>Spices, oils, condiments</li>
                                            <li>Toiletries, paper goods, baby food</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#1d2758] rounded-2xl p-6 text-white text-sm space-y-4 flex flex-col">
                                        <div className="space-y-3">
                                            <h4 className="text-lg font-semibold">Residential program needs</h4>
                                            <ul className="space-y-1.5">
                                                <li>New or gently used men’s seasonal clothing</li>
                                                <li>New sneakers, slippers, socks, underwear</li>
                                                <li>New twin bedding &amp; pillows</li>
                                                <li>Toiletries &amp; shaving items</li>
                                                <li>Laundry items</li>
                                                <li>Durable plastic plates, cups, bowls</li>
                                                <li>Flatware &amp; silverware</li>
                                            </ul>
                                        </div>
                                        <div className="pt-1">
                                            <Link
                                                to="#"
                                                className="inline-flex rounded-full bg-light-orange text-dark-blue font-semibold text-xs sm:text-sm px-6 py-3 shadow-md hover:bg-yellow-400 transition"
                                            >
                                                View our Amazon WishList
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-20 bg-off-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h3 className="text-3xl font-bold mb-6">Items We Cannot Accept</h3>
                        <ul className="list-disc ml-5 space-y-2 text-med-blue">
                            <li>Expired or open containers</li>
                            <li>Used or open toiletries</li>
                            <li>Used underwear and socks</li>
                            <li>Used bedding, furniture, or older TV sets</li>
                            <li>
                                Large donations of women’s and children’s clothes (please give to Abbey’s House or the Salvation Army)
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>



    );
}
