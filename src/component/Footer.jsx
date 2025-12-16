import React from 'react';

export const Footer = () => {
    return (
        <div className="relative mt-16 bg-dark-blue">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-white"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <img
                            src="/logo_full_transparent.png" alt="logo"
                        />
                        <div>
                            <p className="font-semibold tracking-wide text-white">
                                Explore
                            </p>
                            <li>
                                <a
                                    href="/about"
                                    className="transition-colors duration-300 text-white hover:text-off-white"
                                >
                                    About Us
                                </a>
                            </li>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="/nutrition"
                                        className="transition-colors duration-300 text-white hover:text-off-white"
                                    >
                                        Nutrition Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/residential"
                                        className="transition-colors duration-300 text-white hover:text-off-white"
                                    >
                                        Residential Treatment
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/recovery"
                                        className="transition-colors duration-300 text-white hover:text-off-white"
                                    >
                                        Recovery Program
                                    </a>
                                </li>
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        href="/"*/}
                                {/*        className="transition-colors duration-300 text-white hover:text-off-white"*/}
                                {/*    >*/}
                                {/*        News*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        href="/"*/}
                                {/*        className="transition-colors duration-300 text-white hover:text-off-white"*/}
                                {/*    >*/}
                                {/*        Alumni Program*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        href="/"*/}
                                {/*        className="transition-colors duration-300 text-white hover:text-off-white"*/}
                                {/*    >*/}
                                {/*        Community Naxolone Purchasing Program (CNPP)*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-white">
                                Get Involved
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="/contact"
                                        className="transition-colors duration-300 text-white hover:text-off-white"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/donate"
                                        className="transition-colors duration-300 text-white hover:text-off-white"
                                    >
                                        Donate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/volunteer"
                                        className="transition-colors duration-300 text-white hover:text-off-white"
                                    >
                                        Volunteer Programs
                                    </a>
                                </li>
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        href="/internship"*/}
                                {/*        className="transition-colors duration-300 text-white hover:text-off-white"*/}
                                {/*    >*/}
                                {/*        Internship Program*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        href="/"*/}
                                {/*        className="transition-colors duration-300 text-white hover:text-off-white"*/}
                                {/*    >*/}
                                {/*        Holiday Wish Program*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        href="/"*/}
                                {/*        className="transition-colors duration-300 text-white hover:text-off-white"*/}
                                {/*    >*/}
                                {/*        Careers*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        href="/"*/}
                                {/*        className="transition-colors duration-300 text-white hover:text-off-white"*/}
                                {/*    >*/}
                                {/*        FAQs*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-dark-blue sm:flex-row">
                    <p className="text-sm text-white">
                        © Copyright 2025 Jeremiah's Inn.
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a
                            href="https://x.com/Jeremiahs_Inn"
                            className="transition-colors duration-300 text-white hover:text-off-white"
                        >
                            <svg width="19" height="19" viewBox="0 0 1200 1200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/jeremiahs_inn/"
                            className="transition-colors duration-300 text-white hover:text-off-white"
                        >
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                <circle cx="15" cy="15" r="4" />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/JeremiahsInnInc"
                            className="transition-colors duration-300 text-white hover:text-off-white"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;