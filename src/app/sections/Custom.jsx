import React from "react";
import AuroraText from "../components/Aurora";
import RoadmapBuilder from "../components/RoadmapBuilder";

export default function Custom() {
        return (
                <section className="min-h-150 grid items-center grid-cols-1 sm:grid-cols-1 max-w-7xl px-4 mx-auto gap-8">
                        {/* text */}
                        <div className="">
                                <h2 className="text-balance text-4xl sm:text-6xl mb-8 tracking-tight font-black">
                                        Architect Your <AuroraText>Syllabus Pipeline</AuroraText>
                                </h2>

                                <p className="text-balance text-neutral-300 sm:text-xl mb-8">
                                        Your goals aren’t pre-built, your learning shouldn't be either. Select core
                                        blocks from our curriculum matrix to compile an educational roadmap tailored
                                        entirely to you.
                                </p>
                        </div>

                        <div className="flex items-center justify-center relative">
                                <RoadmapBuilder />
                                {/* <span className="text-9xl font-black text-center text-[#EE2F03]">Shape here!</span> */}
                        </div>
                </section>
        );
}
