import Image from "next/image";

export default function Home() {
    return (<>
        <div className="text-black font-[family-name:var(--font-raleway)] h-[95vh] flex flex-col md:justify-center items-center text-center md:pt-16 bg-[#e8efed]">
            <h1 className="text-xl sm:text-4xl pb-4 md:pb-12 px-2 font-bold">Welcome to the Currie Lab!</h1>
            <p className="sm:text-xl px-2 md:px-44">
                We seek to understand the mechanisms that govern genome organization, epigenetic gene regulation, and genome stability in health and disease. We combine structural biology, biochemistry, and cellular model systems.
            </p>

            <h1 className="text-xl sm:text-2xl font-bold pt-12"> Research Areas</h1>
            <p className="sm:text-lg py-4 md:py-6 px-2">Cell Biology, Developmental Biology, Genetics / Genomics, Molecular Biology, Pathology, Proteomics, Structural Biology </p>

            <div className="flex justify-center md:my-14 overflow-hidden md:object-contain md:w-full">
                <Image
                    src="/images/scene2.png"
                    alt=""
                    width="1000"
                    height="500"
                    className="brightness-75"
                />
            </div>
        </div>
    </>);
}
