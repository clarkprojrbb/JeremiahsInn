import React from "react";
import { Link } from "react-router-dom";

const NutritionNeeds = [
    { item: 'Sterilite Stackable Totes 72 Qt' },
    { item: 'Rubber gloves' },
    { item: 'Large cardboard boxes' },
    { item: 'Plastic grocery bags or tote bags' },
    { item: 'Vegan, gluten-free & allergen-free items' },
    { item: 'Boxed meals, canned meats, soups' },
    { item: 'Spices, oils, condiments' },
    { item: 'Toiletries, paper goods, baby food' },
];

const ResidentialNeeds = [
    { item: 'New or gently used men\'s seasonal clothing' },
    { item: 'New sneakers, slippers, socks, underwear' },
    { item: 'New twin bedding & pillows' },
    { item: 'Toiletries & shaving items' },
    { item: 'Laundry items' },
    { item: 'Durable plastic plates, cups, bowls' },
    { item: 'Flatware & silverware' },
];

const SingleCard = ({
                        image,
                        Button,
                        CardDescription,
                        CardTitle,
                        titleHref,
                        btnHref,
                    }) => {
    return (
        <div className="mb-10 h-full overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
            <img src={image} alt={CardTitle} className="w-full object-cover aspect-[4/3]" />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 flex flex-col">
                <h3 className="flex-shrink-0">
                    <Link
                        to={titleHref ? titleHref : "/#"}
                        className="mb-4 block text-xl font-bold text-dark-blue hover:text-light-orange sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        {CardTitle}
                    </Link>
                </h3>

                <p className="mb-7 text-base leading-relaxed text-med-blue dark:text-dark-6 flex-grow overflow-hidden">
                    {CardDescription}
                </p>
                <div className="group relative grow">
                    {Button && (
                        <Link
                            to={btnHref ? btnHref : "#"}
                            className="inline-block rounded-full px-7 py-3 mx-auto border-2 border-dark-blue bg-dark-blue text-centered font-bold text-white transition duration-300 uppercase hover:bg-off-white hover:text-dark-blue hover:border-dark-blue shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                        >
                            {Button}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Donate() {
    return (
        <main className="text-dark-blue">
            <section className="pt-20 md:pt-28 pb-10" style={{ backgroundColor: 'rgb(45, 56, 131)' }}>
                <div className="relative mx-auto px-6">
                    <div className="relative px-10 py-10 lg:px-12 lg:py-12 grid gap-10 lg:grid-cols-2 items-center max-w-5xl mx-auto">
                    <div className="space-y-2 max-w-md lg:max-w-lg">
                            <p className="text-white text-sm">
                                Support Hope and Healing in Worcester
                            </p>
                            <h1 className="text-4xl font-bold text-white">
                                Two programs. One mission of care.
                            </h1>
                            <p className="text-sm text-white max-w-xl">
                                Here at Jeremiah's Inn we house two programs under one roof. Your support helps us provide meals, shelter, and long-term recovery services to our neighbors in need.
                            </p>
                            <p className="text-sm text-white font-medium">
                                Honorable mention of our partners. Their support of the Jeremiah's Inn mission
                                helps provide relief and comfort to the community.
                            </p>
                            <p className="text-sm font-bold text-white font-medium">
                                P.O. Box 30305, Worcester, MA 01603
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-10 pt-20 dark:bg-dark lg:py-10" style={{ backgroundColor: 'rgb(235, 235, 235)' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                        <SingleCard
                            image="/donation1.jpg"
                            CardTitle="In-Kind Donations"
                            titleHref="/#"
                            btnHref="https://www.amazon.com/hz/wishlist/ls/1G0TE2C1GCU99?ref_=wl_share"
                            CardDescription="In-kind donations at the above address during food pantry hours (M 9-12:30 T, TH, F 9-2). To make drop-off arrangements outside of these hours please contact (508) 755-6403 x 110 or info@jeremiahsinn.com. Below is a list of basic items of which we are always in need. For seasonal and special request items see our Amazon wishlist."
                            Button="View Wishlist"
                        />
                        <SingleCard
                            image="/donation2.jpeg"
                            CardTitle="Online & Check Donations"
                            titleHref="/#"
                            btnHref="https://jeremiahsinn.kindful.com/"
                            CardDescription="To donate by check, make your check payable to Jeremiah's Inn and mail it to: P.O. Box 30035, Worcester, MA 01603. Click the link below to make a secure online donation. Your generosity helps provide nutritious meals, safe housing, and recovery services for individuals and families in our community. Every contribution makes a meaningful impact."
                            Button="Donate Online"
                        />
                        <SingleCard
                            image="/donation3.jpg"
                            CardTitle="Memorial Donations"
                            titleHref="/#"
                            btnHref="#"
                            CardDescription="We humbly accept donations in memory of loved ones as a meaningful way to honor their life and legacy. Contributions may also be made in lieu of gifts for anniversaries, birthdays, recovery milestones, and other special occasions. Please fill out the form below to provide contact information for acknowledgment, and we will be honored to notify recipients. "
                            Button="Make a Gift"
                        />
                    </div>

                </div>
            </section>

            <section className="relative ItemsNeeded py-20 mt-10 dark:bg-dark">
                <div className="absolute inset-0 bg-[url('/texture-pattern.png')] opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <p className="text-center text-dark-blue text-3xl mx-auto mb-12 leading-relaxed">
                        Right now, Jeremiah's Inn urgently needs support to provide nutritious food, essential supplies, safe housing, and recovery services for individuals and families in Worcester. Contributions help keep our pantry stocked, maintain residential programs, and sustain counseling and wellness services that empower people to rebuild their lives with dignity and stability. Every gift makes an immediate impact, ensuring care, compassion, and hope reach those who need it most.
                    </p>
                    <div className="flex justify-center">
                        <div
                            className="w-full max-w-3xl overflow-hidden mt-10"
                            style={{ borderRadius: "32px" }}
                        >
                            <img
                                src="/donation.jpg"
                                alt="Volunteers preparing donations"
                                style={{
                                    width: "50%",
                                    height: "auto",
                                    display: "block",
                                    margin: "0 auto",
                                    borderRadius: "32px",
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 mt-10">
                        <article className="bg-white/95 backdrop-blur-sm rounded-[28px] shadow-2xl border-2 flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-300" style={{ borderColor: 'rgb(255, 216, 126)' }}>
                            <div className="px-8 py-6" style={{ background: 'rgb(255, 216, 126)' }}>
                                <h3 className="text-3xl font-bold text-dark-blue flex items-center justify-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Nutrition Program Needs
                                </h3>
                            </div>
                            <div className="flex flex-1 flex-col p-8 space-y-6">
                                <ul className="space-y-3 text-dark-blue text-base">
                                    {NutritionNeeds.map((need, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0" style={{ color: 'rgb(255, 216, 126)' }}>●</span>
                                            <span>{need.item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        <article className="bg-dark-blue rounded-[28px] shadow-2xl border-2 flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-300" style={{ borderColor: 'rgb(255, 216, 126)' }}>
                            <div className=" to-dark-blue px-8 py-6">
                                <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Residential Program Needs
                                </h3>
                            </div>
                            <div className="flex flex-1 flex-col p-8 space-y-6">
                                <ul className="space-y-3 text-white text-base flex-grow">
                                    {ResidentialNeeds.map((need, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0" style={{ color: 'rgb(255, 216, 126)' }}>●</span>
                                            <span>{need.item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-center">
                                    <Link
                                        to="https://www.amazon.com/hz/wishlist/ls/1G0TE2C1GCU99?ref_=wl_share"
                                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-dark-blue font-bold uppercase tracking-wide shadow-lg hover:bg-dark-blue hover:shadow-xl border-2 border-transparent transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                        style={{ backgroundColor: 'rgb(255, 216, 126)' }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                        View Our Amazon List
                                    </Link>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="pb-20 bg-white mt-10">
                <div className="max-w-6xl mx-auto py-10 text-center">
                    <h3 className="text-3xl font-bold mb-6">Items We Cannot Accept</h3>
                    <ul className="list-disc ml-5 space-y-2 text-med-blue text-left inline-block">
                        <li>Expired or open containers</li>
                        <li>Used or open toiletries</li>
                        <li>Used underwear and socks</li>
                        <li>Used bedding, furniture, or older TV sets</li>
                        <li>
                            Large donations of women's and children's clothes (please give to Abbey's House or the Salvation Army)
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
