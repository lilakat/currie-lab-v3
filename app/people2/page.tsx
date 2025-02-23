"use client";

import Image from "next/image";
import { useState } from "react";

const labMembers = [
    {
        name: "Elise Name",
        title: "Graduate Student",
        image: "/images/Elise.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. ",
    },
    {
        name: "Name Lastname",
        title: "Undergraduate Student",
        image: "/images/JUN_1004 copy.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. ",
    },
    {
        name: "Name Name",
        title: "Undergraduate Student",
        image: "/images/JUN_1033 copy.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. ",
    },
    {
        name: "Name Lastname",
        title: "title",
        image: "/images/JUN_1014 copy[17691].jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. ",
    },
    {
        name: "Name Name",
        title: "title",
        image: "/images/JUN_1040 copy.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. ",
    },
    {
        name: "Another Name",
        title: "title",
        image: "/images/JUN_1055 copy.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. ",
    },
];

const secondaryColour = "text-slate-700";
const textColour = "text-black";
//const tealBar = "border-emerald-700";
const tealText = "text-emerald-700";

const ChevronDownSVG = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="ml-1 w-5 h-5"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const ChevronUpSVG = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="ml-1 w-5 h-5"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
);


export default function People() {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [mainExpanded, setMainExpanded] = useState<boolean>(false);

    const toggleDescription = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const toggleMainDescription = () => {
        setMainExpanded(!mainExpanded);
    };

    return (
        <div className={`flex flex-col items-center justify-center p-8 ${textColour}`}>
            <div className={`py-12 lg:w-5/6 2xl:w-3/5 px-2 text-black font-[family-name:var(--font-dmSans)]`}>
                <div className={`pb-6`}>
                    <h2 className={`border-l-8 border-emerald-700 border-solid pl-4 text-3xl font-bold uppercase`}>Meet The Team</h2>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-stretch gap-12 text-center md:text-left">
                    <div className="relative flex-shrink-0 flex items-center justify-center self-center">
                        <Image
                            src="/images/Currie resized.jpg"
                            alt="Mark Currie"
                            width="300"
                            height="300"
                            className={`w-full max-w-[300px] h-auto object-cover`}
                        />
                    </div>

                    <div className={``}>
                        <h2 className={`text-3xl font-bold ${tealText}`}>
                            Mark Currie, PhD
                        </h2>
                        <div className={`text-lg italic pt-1 ${secondaryColour}`}>
                            Principal Investigator
                        </div>
                        <p className={`mt-1 text-lg ${secondaryColour}`}>
                            Cell & Systems Biology, University of Toronto
                        </p>

                        <div className={`mt-4`}>
                            <h3 className={`font-bold text-lg`}>Research Areas</h3>
                            <p className={`${secondaryColour} text-lg`}>
                                Cell Biology, Developmental Biology, Genetics / Genomics, Molecular Biology, <br />Pathology, Proteomics, Structural Biology
                            </p>
                        </div>

                        <div className={`mt-4`}>
                            <h3 className={`font-bold text-lg`}>Education</h3>
                            <p className={`${secondaryColour} text-lg`}>
                                B.Sc. (Hons.) Queen’s University
                            </p>
                            <p className={`${secondaryColour} text-lg`}>
                                Ph.D. Queen’s University
                            </p>
                        </div>
                    </div>
                </div>


                <button onClick={toggleMainDescription} className="pb-2 flex text-lg items-center text-emerald-700 hover:text-emerald-900 focus:outline-none text-center md:text-left">
                    {mainExpanded ? <>Description {ChevronUpSVG}</> : <>Description {ChevronDownSVG}</>}
                </button>

                {mainExpanded && (
                    <div className={`text-justify text-base`}>
                        Mauris tempus, ligula id suscipit pulvinar, ligula mi vehicula massa, sit amet porta enim diam vel tortor. Donec euismod, augue maximus fringilla lacinia, leo sem sagittis augue, luctus posuere nunc nisi eget est. Sed ornare suscipit enim ut maximus. In eleifend et ante quis hendrerit. Mauris eget mi libero. Morbi semper in quam vitae condimentum. Quisque nisl magna, interdum sed tincidunt vulputate, tempor in purus. Maecenas eros nulla, elementum sit amet nulla ut, dapibus feugiat lacus. Aenean consequat sit amet nunc non luctus. Vestibulum efficitur velit nec purus posuere, at maximus ligula porta.
                        <br></br><br></br>
                        Phasellus lobortis at urna ut pellentesque. Ut vel luctus sem. Aenean dignissim et massa vitae facilisis. Integer viverra metus et leo rhoncus, ac maximus arcu consequat. Phasellus eu feugiat risus. Suspendisse eu euismod orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis quam sagittis, finibus eros sed, semper sem.
                    </div>
                )}

                <div className={`py-12`}>
                    <h2 className={`border-l-8 border-emerald-700 border-solid pl-4 text-3xl font-bold uppercase`}>Lab Members</h2>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12`}>
                    {labMembers.map((member, index) => (
                        <div key={index} className={`flex flex-col items-center text-center`}>
                            <div className={`w-64 h-80 relative mb-4`}>
                                <Image
                                    src={member.image}
                                    alt={`${member.name} photo`}
                                    layout="fill"
                                    objectFit="cover"
                                    className={``}
                                />
                            </div>

                            <h2 className={`text-lg font-semibold`}>{member.name}</h2>

                            <p className={`${secondaryColour}`}>{member.title}</p>

                            {/* Expandable Description */}
                            <button onClick={() => toggleDescription(index)} className="mt-2 flex items-center text-emerald-700 hover:text-emerald-900 focus:outline-none">
                                {expandedIndex === index ? ChevronUpSVG : ChevronDownSVG}
                            </button>

                            {expandedIndex === index && (
                                <p className={`mt-2 text-base text-slate-600`}>{member.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
