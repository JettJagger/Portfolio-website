"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Code Nation</li>
                <li>University of Roehampton</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Developer Bootcamp</li>

            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/about-image.png" width={500} height={500} alt="about" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

                    <div className="mb-4">
                    <p className="text-white texxt-base md:text-lg">
                        Welcome! I{"'"}m embarking on an exhilarating journey in the realm of software development, driven by an unbridled passion for game development and the transformative potential of artificial intelligence. As I set foot into this dynamic industry, my fascination lies in crafting captivating gaming experiences while exploring the incredible applications of AI.
                    </p>
                    </div>

                    <div className="mb-4">
                    <p className="text-white texxt-base md:text-lg">
                        My venture into this field is fueled by an insatiable curiosity and a hunger to innovate. I{"'"}m eager to dive into the intricate world of algorithms that power AI-driven game elements and to pioneer fresh ways to seamlessly integrate technology into gameplay.
                    </p>
                    </div>
                    
                    <div className="mb-4">
                    <p className="text-white texxt-base md:text-lg">
                        I bring a blend of technical acumen and boundless creativity to the table, allowing me to tackle challenges head-on and engineer solutions that not only meet but exceed expectations. I{"'"}m committed to honing my skills, embracing the ever-evolving landscape of technology, and contributing fresh perspectives to the vibrant world of game development and AI.
                    </p>
                    </div>

                    <div className="mb-4">
                    <p className="text-white texxt-base md:text-lg">
                        This is just the beginning of an exciting journey where I aim to leverage innovation to create immersive gaming experiences and unlock the untapped potential of AI. Join me as I embark on this exhilarating path, dedicated to shaping the future of gaming through creativity, technology, and endless possibilities.
                    </p>
                    </div>

                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
