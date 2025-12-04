import React, { useState } from 'react';
import { Link } from "react-router-dom";

const HtmlRenderer = ({ htmlContent, className }) => (
    <div
        className={className}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
);

const posts = [
    {
        id: 1,
        href: '#',
        description:'1059 Main Street<br />Worcester, MA 01603',
        category: { title: 'Visit us in person', href: '#' },
    },
    {
        id: 2,
        href: '#',
        description: '',
        category: { title: 'Mailing Address', href: '#' },
    },
    {
        id: 3,
        href: '#',
        description: 'General Email: info@jeremiahsinn.com <br/> ' +
            'Residential Program Intake/Admission: <br/>' +
            'intake@jeremiahsinn.com <br/>' +
            'Phone: (508) 755-6403 <br/>' +
            'Please use the appropriate extensions. <br/>' +
            'Messages left on ext. “0” may not be forwarded. <br/>' +
            'Please visit our Staff & Board of Directors page for a complete directory.',
        category: { title: 'Email', href: '#' },
    },
]

export default function Contact() {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    alt="google_maps"
                    src="/google_maps_cropped.png"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-off-black opacity-55">
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
                        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Contact Us</h2>
                    </div>
                </div>
            </div>
            <div className=" py-20 sm:py-30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-bold text-black hover:bg-gray-800"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative grow">
                                    <HtmlRenderer
                                        htmlContent={post.description}
                                        className="mt-5 text-sm/6 text-gray-600"
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
