"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted]= useState(false);

    const handlesubmit = async (e) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
        method:'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSONdata,
    };
    
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    

    if (response.status === 200) {
        console.log('Message sent.');
        setEmailSubmitted(true);
    }
 };

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg top-full -left-2 transform -translate-x-1/2 -translate-y-1/4"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I{"'"}m actively seeking new opportunities and welcome any inquiries. Feel free to reach out with questions or just to say hello—I make it a priority to promptly respond to all messages. My inbox is open, and I look forward to connecting with you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/JettJagger">
                        <Image src={GithubIcon}  alt="Git"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jett-jagger-a0355a28b/">
                        <Image src={LinkedinIcon} alt="Linkedin"/>
                    </Link>
                </div>
            </div>
            <div>
       
            {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (

                <form className="flex flex-col" onSubmit={handlesubmit} >
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="rupert@google.com"
                           
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            for="subject"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="subject"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    
                    </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send message
                        </button>
                        {emailSubmitted && (

                            <p className="text-green-500 text-sm mt-2">
                                Email sent successfully!
                            </p>
                        ) }
                   </form>
                   )}
            </div>  
        </section>
    );
};

export default EmailSection;