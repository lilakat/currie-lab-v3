import React from "react";
import Image from "next/image";


const team = [
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
//const textColour = "text-black";
//const tealBar = "border-emerald-700";
const tealText = "text-emerald-700";

export default function People() {
    return (
        <div className={`p-8 text-black text-lg font-[family-name:var(--font-raleway)] flex justify-center`}>
            <div className={`py-12 lg:w-5/6 2xl:w-3/5 px-2 text-black font-[family-name:var(--font-dmSans)]`}>
                <div className={`pb-8`}>
                    <h2 className={`border-l-8 border-emerald-700 border-solid pl-4 text-3xl font-bold uppercase`}>Meet The Team</h2>
                </div>
                
                <div className={`pb-8 w-full text-center md:text-left`}>
                    <div className="w-full flex flex-col lg:flex-row items-stretch gap-12">
                        <div className="relative flex-shrink-0 flex items-center justify-center self-center">
                            <Image
                                src="/images/Currie resized.jpg.jfif"
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

                    <div className={`pt-10 text-justify text-base`}>
                        Mauris tempus, ligula id suscipit pulvinar, ligula mi vehicula massa, sit amet porta enim diam vel tortor. Donec euismod, augue maximus fringilla lacinia, leo sem sagittis augue, luctus posuere nunc nisi eget est. Sed ornare suscipit enim ut maximus. In eleifend et ante quis hendrerit. Mauris eget mi libero. Morbi semper in quam vitae condimentum. Quisque nisl magna, interdum sed tincidunt vulputate, tempor in purus. Maecenas eros nulla, elementum sit amet nulla ut, dapibus feugiat lacus. Aenean consequat sit amet nunc non luctus. Vestibulum efficitur velit nec purus posuere, at maximus ligula porta.
                        <br></br><br></br>
                        Phasellus lobortis at urna ut pellentesque. Ut vel luctus sem. Aenean dignissim et massa vitae facilisis. Integer viverra metus et leo rhoncus, ac maximus arcu consequat. Phasellus eu feugiat risus. Suspendisse eu euismod orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis quam sagittis, finibus eros sed, semper sem.
                    </div>
                </div>

                <div className={`py-8`}>
                    <h2 className={`border-l-8 border-emerald-700 border-solid pl-4 text-3xl font-bold uppercase`}>Lab Members</h2>
                </div>

                <div className="w-full">
                    {team.map((member, index) => (
                        <div key={index} className={`py-6 w-full flex items-center items-stretch ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col`}>
                            {/* Image Container */}
                            <div className={`relative w-full lg:w-auto flex justify-center`}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={175}
                                    height={175}
                                    className="w-[200px] h-[250px] object-cover"
                                />
                            </div>

                            {/* Text Container */}
                            <div className={`py-6 flex flex-col justify-between leading-normal w-full flex-1 ${index % 2 === 0 ? "sm:pl-6 sm:text-left" : "sm:pr-6 sm:text-right"} text-center`}>
                                <div>
                                    <div className={`text-2xl font-bold ${tealText}`}>
                                        {member.name}
                                    </div>
                                    <div className={`text-lg italic py-2 ${secondaryColour}`}>
                                        {member.title}
                                    </div>
                                </div>

                                <div className="text-justify text-base mt-auto">
                                    {member.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}