"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import CyberButtonPrimary from "../components/CyberButtonPrimary";
import CyberButtonSecondary from "../components/CyberButtonSecondary";
import Text from "../components/Text";
import Title from "../components/Title";
import HeroTicker from "./HeroTicker";

function Hero() {
        const t = useTranslations("Hero");

        return (
                // <section className="dhad-container text-center items-center overflow-hidden min-h-[70vh] flex flex-col justify-center w-full sm:w-4xl">
                <section className="dhad-container text-center items-center overflow-hidden min-h-[82vh] flex flex-col justify-center w-full sm:w-4xl bg-no-repeat bg-contain bg-center bg-[url('/img/hero-bg.png')]">
                        <Title className="">
                                {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                        </Title>

                        <Text className="text-lg md:text-xl mb-8 leading-relaxed">{t("description")}</Text>

                        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-6 mb-16 select-none">
                                <CyberButtonPrimary label={t("button_text")} href="#formDhad" />
                                <CyberButtonSecondary label="Login now" href="#" />
                        </div>

                        <HeroTicker />
                </section>
        );
}

export default Hero;
