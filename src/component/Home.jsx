import React, { useState } from 'react';
import { Link } from "react-router-dom";

const links = [
    { name: 'Donate', href: '/donate' },
    { name: 'Partner', href: '#' },
    { name: 'Volunteer', href: '#' },
]
const stats = [
    { name: 'Individuals Served in 2024 through the nutrition center', value: '32k' },
    { name: 'Families Served in 2024 through the Nutrition center', value: '10k' },
    { name: 'Residential Program Completion Rate (statewide Average 33%)', value: '69%' },
    { name: 'Average Number of Men assisted by our recovery programs each year', value: '116' },
]

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
            <div
                className="
                    p-8 text-center sm:p-9 md:p-7 xl:p-9 flex flex-col
                "
            >
                <h3 className="flex-shrink-0">
                    <Link
                        to={titleHref ? titleHref : "/#"}
                        className="
                            mb-4 block text-xl font-bold text-dark-blue hover:text-light-orange
                            sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]
                        "
                    >
                        {CardTitle}
                    </Link>
                </h3>

                <p className="
                    mb-7 text-base leading-relaxed text-med-blue dark:text-dark-6
                    flex-grow overflow-hidden
                ">
                    {CardDescription}
                </p>
                <div className="group relative grow">
                    {Button && (
                        <Link
                            to={btnHref ? btnHref : "#"}
                            className="inline-block rounded-full px-7 py-3 mx-auto
                        border-2 border-dark-blue bg-dark-blue text-centered font-bold
                        text-white transition duration-300 uppercase
                        hover:bg-off-white hover:text-dark-blue hover:border-dark-blue
                        shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                            {Button}
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    alt="home_banner_image"
                    src="/home_banner.png"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-off-black opacity-65">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Jeremiah's Inn</h2>
                        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-3xl">#WeAreJI</h3>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                            Helping People Through our Social Model Recovery Program and Nutrition Center.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div
                            className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse gap-1">
                                    <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <section className="bg-off-white pb-10 pt-20 dark:bg-dark lg:py-10">
                <p className="text-3xl font-bold text-center text-dark-blue sm:text-5xl lg:pb-10">PROGRAMS</p>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                    <SingleCard
                            image="/donate.png"
                            CardTitle="Nutrition Center & Food Pantry"
                            titleHref="/#"
                            btnHref="/donate"
                            CardDescription="JI is committed to helping individuals and families get the nutrition and basic essentials they need to thrive - not just survive"
                            Button="Donate"
                        />
                        <SingleCard
                            image="/partner.png"
                            CardTitle="Residential Substance Use Disorder (SUD) Treatment"
                            CardDescription="Our Social Model Treatment Facilities guide over 100 men each year in their efforts to ser and achieve healthy attainable goals, change behavior, and learn to LIVE recovery."
                            Button="Partner"
                        />
                        <SingleCard
                            image="/volunteer.png"
                            CardTitle="Jeremiah’s House"
                            CardDescription="16-bed Recovery Residence is located on Highland St. Learn More"
                            Button="Volunteer"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
