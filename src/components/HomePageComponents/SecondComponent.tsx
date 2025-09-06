import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ImageCard from "../common/ImageCard";
export default function SecondComponent() {
    return (
        <section className="relative flex flex-col items-center justify-center w-full max-w-7xl px-6 pb-20">
            {/* Blurred Ellipse */}
            <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] top-[-200px] rotate-[75deg] bg-[#29AB87]  blur-[111px] transform "
            />

            <h2 className="text-white text-left w-full font-poppins font-semibold text-[48px] leading-[72px] mb-10 z-10">
                Our Journey So Far
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                <ImageCard
                    imageSrc="/assets/home/lamp.png"
                    title="Paused in 2024 – Not Defeated"
                    description="In 2024, operations came to a halt, but the vision never died. What seemed like an end was only a pause—a moment to reflect, rebuild, and prepare for a stronger return."
                    buttonText="Learn More"
                />

                <ImageCard
                    imageSrc="/assets/home/page_ruler.png"
                    title="Rebuilt with Transparency"
                    description="Every step of our rebuild was guided by openness and trust. We chose clarity over complexity, creating a foundation where transparency drives every decision.”"
                    buttonText="Learn More"
                />

                <ImageCard
                    imageSrc="/assets/home/netflix.png"
                    title="Comeback as Social OTT+ EdTech"
                    description="“Rising with a renewed purpose, we’re reimagining the future at the crossroads of entertainment and learning—building a Social OTT + EdTech platform that connects, inspires, and empowers.”"
                    buttonText="Learn More"
                />

            </div>
        </section>
    );
}
