"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import { MagicIcon } from "../components/Icones";
import OrbitingSkills from "../components/OrbitingSkills";
import ShimmerButton from "../components/Shimmer";
import Text from "../components/Text";
import Title from "../components/Title";
import Form from "./Form";
import HeroTicker from "./HeroTicker";

function Hero() {
        const t = useTranslations("Hero");

        return (
                <section className="dhad-container text-center items-center overflow-hidden min-h-[70vh] flex flex-col justify-center w-full sm:w-4xl">
                        {/* <section className="dhad-container text-center items-center overflow-hidden min-h-[82vh] flex flex-col justify-center w-full sm:w-4xl bg-no-repeat bg-contain bg-center bg-[url('/img/hero-bg.png')]"> */}

                        <HeroTicker />

                        <Title className="mt-8">
                                {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                        </Title>

                        <Text className="text-lg md:text-xl mb-10 leading-relaxed">{t("description")}</Text>

                        <div className="flex items-center justify-center w-full gap-4">
                                <ShimmerButton text={t("button_text")} />
                        </div>
                </section>
        );
}

export default Hero;
