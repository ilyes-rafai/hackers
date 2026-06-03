import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AuroraText from "../components/Aurora";
import ShimmerButton from "../components/Shimmer";
import SwiperRoads from "../components/SwiperRoads";
import Title from "../components/Title";
import VerticalImageMarqueeGrid from "../components/VerticalMarquee";

export default function Road() {
        const t = useTranslations("Road");

        // Get the localized message
        const message = t("whatsapp_message");

        const WHATSAPP_NUMBER = "212727283846";

        return (
                <section className="grid items-center grid-cols-1 sm:grid-cols-1 max-w-7xl px-4 mx-auto gap-16">
                        {/* text */}
                        <div className="">
                                <Title as="h2">
                                        <AuroraText>{t("title_highlight")}</AuroraText> {t("title_rest")}
                                </Title>

                                <p className="text-balance text-neutral-300 sm:text-xl mb-8">{t("description")}</p>

                                <ShimmerButton
                                        text={t("button_text")}
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                                        className="w-full sm:w-auto"
                                />
                        </div>

                        {/* shape */}
                        <div className="flex items-center justify-center relative">
                                {/* <TabsViewFancy /> */}
                                <SwiperRoads />
                                {/* <VerticalImageMarqueeGrid /> */}
                                {/* <Image src="/img/roadmaps/roadmap1.png" alt="Road" fill className="object-contain" /> */}
                        </div>
                </section>
        );
}
