import React from "react";
import AuroraText from "../components/Aurora";
import Marquee from "../components/Marquee";

export default function Testimonials() {
        return (
                <section className="grid text-center items-center grid-cols-1 gap-8">
                        <div className="max-w-7xl px-4 mx-auto">
                                <h2 className="text-balance text-4xl sm:text-6xl mb-4 tracking-tight font-black">
                                        Little
                                        <span className="">
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="1em"
                                                        height="1em"
                                                        className="inline-block mx-2 align-middle"
                                                        viewBox="0 0 24 24"
                                                >
                                                        <defs>
                                                                <linearGradient
                                                                        id="heartGradient"
                                                                        x1="0%"
                                                                        y1="0%"
                                                                        x2="100%"
                                                                        y2="100%"
                                                                >
                                                                        <stop offset="0%" stopColor="#ff0000" />
                                                                        <stop offset="100%" stopColor="#EE2F03" />
                                                                </linearGradient>
                                                        </defs>

                                                        <path
                                                                fill="url(#heartGradient)" // Reference the gradient ID here
                                                                d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137"
                                                        ></path>
                                                </svg>
                                        </span>
                                        from Our <AuroraText>Community</AuroraText>
                                </h2>
                        </div>

                        <Marquee />
                </section>
        );
}
