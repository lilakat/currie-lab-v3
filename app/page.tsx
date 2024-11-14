import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="text-black font-[family-name:var(--font-raleway)] h-screen flex flex-col justify-center items-center">
                <h1 className="text-2xl sm:text-4xl pb-12 font-bold">Welcome to the Currie Lab!</h1>
                <p className="sm:text-xl px-44">
                    We seek to understand the mechanisms that govern genome organization, epigenetic gene regulation, and genome stability in health and disease. We combine structural biology, biochemistry, and cellular model systems.
                </p>

                <h1 className="text-2xl sm:text-2xl font-bold pt-12"> Research Areas</h1>
                <p className="sm:text-lg py-6">Cell Biology, Developmental Biology, Genetics / Genomics, Molecular Biology, Pathology, Proteomics, Structural Biology </p>

                <div className="flex justify-center mt-20">
                    <Image
                        src="/images/scene2.png"
                        alt=""
                        width="1000"
                        height="500"
                        className="brightness-75"
                    />
                </div>
            </div>
        </>
    );
}
