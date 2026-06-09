import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AuroraText from "../components/Aurora";
import ShimmerButton from "../components/Shimmer";
import SwiperRoads from "../components/SwiperRoads";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Road() {
        const t = useTranslations("Road");

        return (
                <section className="">
                        {/* text */}
                        <div className="text-center mb-16 dhad-container">
                                <Title as="h2">
                                        <AuroraText>{t("title_highlight")}</AuroraText> {t("title_rest")}
                                </Title>

                                <Text className="mb-8">{t("description")}</Text>

                                <ShimmerButton text={t("button_text")} />
                        </div>

                        {/* shape */}
                        <div className="flex items-center justify-center relative">
                                <SwiperRoads />
                        </div>
                </section>
        );
}
