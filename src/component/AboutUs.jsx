import React from "react";
import { Link } from "react-router-dom";

const people1=[
    {name: "Richard (Dick) Quinlan ", title: "Chief Executive Officer", email:"dick@jeremiahsinn.com",
        phone: "(508) 755-6403 x 102", desc:"Dick Quinlan brings 40 years of management experience in the " +
            "manufacturing and service sectors, having won national awards for Business Development, " +
            "Relationship Management, and Operational Excellence. In 2015, with 27 years of sobriety, " +
            "he joined Jeremiah’s Inn to implement operational changes, combining his business acumen " +
            "and personal experience in recovery. He has modernized the organization with new treatment " +
            "processes, improved hiring practices, and a trauma-informed work culture, making Jeremiah’s " +
            "Inn one of Massachusetts’s top Residential Rehabilitation Services organizations. “My " +
            "position at Jeremiah’s Inn is my fourth significant career change and by far the most " +
            "rewarding”. He also says, “make no mistake, although I may be a Director, our success as an " +
            "organization is the result of the collective hard work of the dedicated team I have the honor " +
            "to work with.”", src:"/dick_quinlan.png"},
    {name: "Dominic Idoko", title:"Clinical Director", email:"dominic@jeremiahsinn.com", phone:"(508) 755-6403 x 150",
        desc:"", src:"/dominic_idoko.png"},
    {name: "Alyssa Dancause, LADAC II", title:"Director of Community Engagement", email:"alyssa@jeremiahsinn.com", phone: "(508) 755-6403 Ext. 110",
        desc:"Contact Alyssa for information regarding donations, events, volunteering, website, social media, TGH, Aftercare & Alumni programs. ",
        src:"/alyssa_dancause.png"}
]

export default function AboutUs(){
    return (
        <div className="w-full h-screen bg-gray-100 px-10 pt-10">
            {people1.map((person)=>(
                <div className="relative mt-16 mb-32 max-w-sm mx-auto mt-24">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute  -mt-20 w-full flex justify-center">
                            <div className="h-20 w-20">
                                <img src={person.src} className="rounded-full object-scale-down h-full w-full shadow-md"/>
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">{person.name}</h1>
                            <p className="text-gray-800 text-sm text-center">{person.title}</p>
                            <p className="text-gray-800 text-sm text-center">Email:{person.email}</p>
                            <p className="text-gray-800 text-sm text-center">Phone:{person.phone}</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                {person.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}