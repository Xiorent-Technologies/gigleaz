import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import IconCard from "../common/IconCard";
export default function SecondComponent() {
    return (
        <section className="relative flex flex-col items-center justify-center w-full max-w-7xl px-6 pb-20">
            {/* Blurred Ellipse */}
            <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] top-[-200px] rotate-[75deg] bg-[#29AB87]  blur-[111px] transform "
            />

            <h2 className="text-white text-left w-full font-poppins font-semibold text-[48px] leading-[72px] mb-10 z-10">
                What’s Coming
            </h2>

            <p className="text-white text-left w-full font-poppins font-normal text-lg leading-7 mb-10 z-10">
“Dive into Day One with a curated experience: explore top courses with trailers and previews, catch quick 15-second shorts and teasers, and discover how creators can monetize their content—all in one seamless carousel.”            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                <IconCard
                    imageSrc="/assets/home/icons/scholar.png"
                    title="Top Courses "
                    description="Dive into engaging trailers and previews of our most popular courses."
                />

                <IconCard
                    imageSrc="/assets/home/icons/tab_phone.png"
                    title="Shorts & Reels"
                    description="Quick 15-second teasers to spark curiosity and learning."
                />

                <IconCard
                    imageSrc="/assets/home/icons/tabs.png"
                    title="Monetization"
                    description="Snapshots of how creators can earn and grow on the platform."
                />

                

            </div>
        </section>
    );
}
