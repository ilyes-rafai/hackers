"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import RoadmapBuilder from "../components/RoadmapBuilder";
import Title from "../components/Title";

export default function Custom() {
        const t = useTranslations("Custom");

        return (
                <section className="min-h-150 grid items-center grid-cols-1 sm:grid-cols-1 max-w-7xl px-4 mx-auto gap-8">
                        {/* text */}
                        <div className="">
                                <Title as="h2">
                                        {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                                </Title>

                                <p className="text-balance text-neutral-300 sm:text-xl mb-8">{t("description")}</p>
                        </div>

                        <div className="flex items-center justify-center relative">
                                <RoadmapBuilder />
                        </div>
                </section>
        );
}
