import Image from "next/image";
import React from "react";
import AuroraText from "../components/Aurora";
import ShimmerButton from "../components/Shimmer";
import ThreeDCarousel from "../components/ThreeDCarousel";
import VerticalImageMarqueeGrid from "../components/VerticalMarquee";

export default function Road() {
        const WHATSAPP_NUMBER = "212727283846";

        return (
                <section className="min-h-150 grid items-center grid-cols-1 sm:grid-cols-2 max-w-7xl px-4 mx-auto gap-16">
                        {/* shape */}
                        <div className="flex items-center justify-center relative h-96">
                                {/* <TabsViewFancy /> */}
                                {/* <ThreeDCarousel /> */}
                                <VerticalImageMarqueeGrid />
                                {/* <Image src="/img/roadmaps/roadmap1.png" alt="Road" fill className="object-contain" /> */}
                        </div>

                        {/* text */}
                        <div className="">
                                <h2 className="text-balance text-4xl sm:text-6xl mb-8 tracking-tight font-black">
                                        <AuroraText>Ready-Made</AuroraText> Paths
                                </h2>

                                <p className="text-balance text-neutral-300 sm:text-xl mb-8">
                                        Master coding, design, or cybersecurity. Follow a clear, practical path with
                                        step-by-step tutoring.
                                </p>

                                <ShimmerButton
                                        text="Enroll via WhatsApp"
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                                "Hello DHAD Hackers! I am looking to enroll in one of your ready-made learning tracks. Could you please share more information regarding the available schedules and next steps?",
                                        )}`}
                                        className="w-full sm:w-auto"
                                />
                        </div>
                </section>
        );
}
