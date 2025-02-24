"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


const featuredImages = [
    "/images/placeholderrectangle.webp",
    "/images/placeholderrectangle.webp",
    "/images/placeholderrectangle.webp",
];

const allImages = [
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
    "/images/placeholdersquare.png",
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Manual slide function
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? featuredImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={`flex flex-col items-center justify-center p-8 text-black`}>
            <div className={`py-12 lg:w-5/6 2xl:w-3/5 px-2 text-black font-[family-name:var(--font-dmSans)]`}>
                <div className={`pb-8`}>
                    <h2 className={`border-l-8 border-emerald-700 border-solid pl-4 text-3xl font-bold uppercase`}>Gallery</h2>
                </div>

                {/* Carousel Section */}
                <div className="flex justify-center ">
                    <div className="w-full max-w-4xl mb-12 relative ">
                        {/* Image Slider */}
                        <div className="w-full h-[400px] relative overflow-hidden">
                            {featuredImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Featured ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute text-4xl top-1/2 left-4 transform -translate-y-1/2 opacity-50 text-white p-2 hover:bg-opacity-80"
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute text-4xl top-1/2 right-4 transform -translate-y-1/2 opacity-50 text-white p-2 hover:bg-opacity-80"
                        >
                            ❯
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {featuredImages.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-emerald-700" : "bg-gray-300"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className={`py-8`}>
                    <h2 className={`border-l-8 border-emerald-700 border-solid pl-4 text-3xl font-bold uppercase`}>Title</h2>
                </div>

                {/* Image Grid */}
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
                        {allImages.map((image, index) => (
                            <div key={index} className="relative w-56 h-56">
                                <Image
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    width={224} // 56 * 4 = 224px
                                    height={224}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}
