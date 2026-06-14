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

function Hero() {
        const t = useTranslations("Hero");

        return (
                <section className="relative grid grid-cols-1 md:grid-cols-2 dhad-container sm:gap-12 items-center overflow-hidden min-h-[70vh]">
                        <div className="flex flex-col justify-start items-start flex-1 min-w-75 z-10">
                                <Title className="">
                                        {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                                </Title>

                                <Text className="text-lg md:text-xl mb-10 leading-relaxed">{t("description")}</Text>

                                {/* <div className="flex items-center w-full gap-4">
                                        <ShimmerButton text={t("button_text")} />
                                </div> */}
                        </div>

                        <div className="flex justify-center mx-auto flex-1 min-w-75 relative z-10 mt-12 md:mt-0">
                                <Form />
                        </div>
                </section>
        );
}

export default Hero;
