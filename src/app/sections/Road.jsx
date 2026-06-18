import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AuroraText from "../components/Aurora";
import Roads from "../components/Roads";
import ShimmerButton from "../components/Shimmer";
import SwiperRoads from "../components/SwiperRoads";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Road() {
        const t = useTranslations("Road");

        return (
                <section className="dhad-container">
                        {/* text */}
                        <div className="text-center mb-16">
                                <Title as="h2">
                                        <AuroraText>{t("title_highlight")}</AuroraText> {t("title_rest")}
                                </Title>

                                <div className="mb-8 w-full sm:w-4xl mx-auto">
                                        <Text className="">{t("description")}</Text>
                                </div>

                                <ShimmerButton text={t("button_text")} />
                        </div>

                        <Roads />

                        {/* shape */}
                        {/* <div className="flex items-center justify-center relative">
                                <SwiperRoads />
                        </div> */}
                </section>
        );
}
