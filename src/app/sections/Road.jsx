import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AuroraText from "../components/Aurora";
import CircularGallery from "../components/CircularGallery";
import ShimmerButton from "../components/Shimmer";
import Title from "../components/Title";
import VerticalImageMarqueeGrid from "../components/VerticalMarquee";

export default function Road() {
        const t = useTranslations("Road");

        // Get the localized message
        const message = t("whatsapp_message");

        const WHATSAPP_NUMBER = "212727283846";

        const roads = [
                "/img/roads/modern-web-frontend.png",
                "/img/roads/office-suite-mastery.png",
                "/img/roads/python-mastery.png",
                "/img/roads/team-coding.png",
                "/img/roads/ui-ux-design.png",
                "/img/roads/web-backend-code.png",
                "/img/roads/web-frontend-core.png",
                "/img/roads/web-hacking.png",
        ];

        return (
                <>
                        <section className="min-h-150 grid items-center grid-cols-1 sm:grid-cols-2 max-w-7xl px-4 mx-auto gap-16">
                                {/* shape */}
                                <div className="flex items-center justify-center relative h-96">
                                        {/* <TabsViewFancy /> */}
                                        {/* <CircularGallery /> */}
                                        <VerticalImageMarqueeGrid />
                                        {/* <Image src="/img/roadmaps/roadmap1.png" alt="Road" fill className="object-contain" /> */}
                                </div>

                                {/* text */}
                                <div className="">
                                        <Title as="h2">
                                                <AuroraText>{t("title_highlight")}</AuroraText> {t("title_rest")}
                                        </Title>

                                        <p className="text-balance text-neutral-300 sm:text-xl mb-8">
                                                {t("description")}
                                        </p>

                                        <ShimmerButton
                                                text={t("button_text")}
                                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                                                className="w-full sm:w-auto"
                                        />
                                </div>
                        </section>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <section className="min-h-150 grid items-center grid-cols-1 px-4 mx-auto gap-0">
                                {/* text */}
                                <div className="">
                                        <Title as="h2">
                                                <AuroraText>{t("title_highlight")}</AuroraText> {t("title_rest")}
                                        </Title>

                                        <p className="text-balance text-neutral-300 sm:text-xl mb-8">
                                                {t("description")}
                                        </p>

                                        <ShimmerButton
                                                text={t("button_text")}
                                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                                                className="w-full sm:w-auto"
                                        />
                                </div>

                                <div className="flex items-center justify-center relative h-96">
                                        <CircularGallery />
                                </div>
                        </section>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <section className="min-h-150 grid items-center grid-cols-1 max-w-5xl px-4 mx-auto gap-16">
                                {/* text */}
                                <div className="">
                                        <Title as="h2">
                                                <AuroraText>{t("title_highlight")}</AuroraText> {t("title_rest")}
                                        </Title>

                                        <p className="text-balance text-neutral-300 sm:text-xl mb-8">
                                                {t("description")}
                                        </p>

                                        <ShimmerButton
                                                text={t("button_text")}
                                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                                                className="w-full sm:w-auto"
                                        />
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                                        {roads.map((road, i) => (
                                                <Image
                                                        key={i}
                                                        src={road}
                                                        width={200}
                                                        height={
                                                                200
                                                        } /* Provide a number here representing the original height to establish aspect ratio */
                                                        className="w-full h-auto rounded-lg transiiton duration-300 hover:scale-95" /* This tells CSS to set width to 200px and height to auto */
                                                        alt={`Road ${i}`}
                                                />
                                        ))}
                                </div>
                        </section>
                </>
        );
}
