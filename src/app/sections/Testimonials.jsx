"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import Marquee from "../components/Marquee";
import Title from "../components/Title";

export default function Testimonials() {
        const t = useTranslations("Testimonials");

        return (
                <section className="grid text-center items-center grid-cols-1 gap-8">
                        <div className="max-w-7xl px-4 mx-auto">
                                <Title as="h2">
                                        {t("title_part1")}
                                        <span className="inline-block align-middle mx-2">
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        className="inline-block align-middle"
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
                                                                fill="url(#heartGradient)"
                                                                d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137"
                                                        />
                                                </svg>
                                        </span>
                                        {t("title_part2")} <AuroraText>{t("title_highlight")}</AuroraText>
                                </Title>
                        </div>

                        <Marquee />
                </section>
        );
}
