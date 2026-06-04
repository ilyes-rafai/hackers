import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AuroraText from "../components/Aurora";
import ShimmerButton from "../components/Shimmer";
import SwiperRoads from "../components/SwiperRoads";
import Title from "../components/Title";

export default function Road() {
        const t = useTranslations("Road");

        return (
                <section className="grid items-center grid-cols-1 sm:grid-cols-1 gap-16">
                        {/* text */}
                        <div className="text-center max-w-9/12 px-4 mx-auto">
                                <Title as="h2">
                                        <AuroraText>{t("title_highlight")}</AuroraText> {t("title_rest")}
                                </Title>

                                <p className="text-balance text-neutral-300 sm:text-xl mb-8">{t("description")}</p>

                                <ShimmerButton text={t("button_text")} />
                        </div>

                        {/* shape */}
                        <div className="flex items-center justify-center relative">
                                <SwiperRoads />
                        </div>
                </section>
        );
}
