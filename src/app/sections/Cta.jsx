"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import CyberButtonPrimary from "../components/CyberButtonPrimary";
import OrbitingSkills from "../components/OrbitingSkills";
import Text from "../components/Text";
import Title from "../components/Title";

export default function CTA() {
        const t = useTranslations("CTA");

        return (
                <section className="relative px-4">
                        <div className="relative dhad-container">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        {/* Left: The "Hard-Hitting" Text */}
                                        <div className="">
                                                <Title as="h2">
                                                        {t("title_part1")}{" "}
                                                        <AuroraText>{t("title_highlight")}</AuroraText>
                                                </Title>

                                                <Text>{t("description")}</Text>

                                                {/* Action Area */}
                                                <div className="mt-8">
                                                        <CyberButtonPrimary label={t("button_text")} href="#formDhad" />
                                                </div>
                                        </div>
                                        <div className="flex justify-center mx-auto relative z-10 text-[#FF0000]">
                                                <OrbitingSkills />
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
