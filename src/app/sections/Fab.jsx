"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AuroraText from "../components/Aurora";
import ShimmerButton from "../components/Shimmer";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Fab() {
        const t = useTranslations("Fab");

        return (
                <div className="dhad-container">
                        {/* <div className="h-0.5 bg-linear-to-r from-transparent via-[#FF0000] to-transparent"></div> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center pt-8 gap-16 md:gap-8">
                                <div className="text-balance">
                                        {/* <Image
                                                src="/img/learn/stacks.png"
                                                alt="On-Site Learning"
                                                width={200}
                                                height={200}
                                                loading="lazy"
                                                className="mx-auto mb-4"
                                        /> */}
                                        <video width="320" height="240" muted loop preload="none" autoPlay>
                                                <source src="/videos/knowledge4.mp4" type="video/mp4" />
                                                <track
                                                        src="/path/to/captions.vtt"
                                                        kind="subtitles"
                                                        srcLang="en"
                                                        label="English"
                                                />
                                                Your browser does not support the video tag.
                                        </video>
                                        <h4 className="text-xl font-semibold mb-4">{t("title_1")}</h4>
                                        <Text>{t("description1")}</Text>
                                </div>
                                <div className="text-balance">
                                        {/* <Image
                                                src="/img/learn/time.png"
                                                alt="On-Site Learning"
                                                width={200}
                                                height={200}
                                                loading="lazy"
                                                className="mx-auto mb-4"
                                        /> */}
                                        <video width="320" height="240" muted loop preload="none" autoPlay>
                                                <source src="/videos/knowledge2.mp4" type="video/mp4" />
                                                <track
                                                        src="/path/to/captions.vtt"
                                                        kind="subtitles"
                                                        srcLang="en"
                                                        label="English"
                                                />
                                                Your browser does not support the video tag.
                                        </video>
                                        <h4 className="text-xl font-semibold mb-4">{t("title_2")}</h4>
                                        <Text>{t("description2")}</Text>
                                </div>
                                <div className="text-balance">
                                        {/* <Image
                                                src="/img/learn/platforme.png"
                                                alt="On-Site Learning"
                                                width={200}
                                                height={200}
                                                loading="lazy"
                                                className="mx-auto mb-4"
                                        /> */}
                                        <video width="320" height="240" muted loop preload="none" autoPlay>
                                                <source src="/videos/knowledge3.mp4" type="video/mp4" />
                                                <track
                                                        src="/path/to/captions.vtt"
                                                        kind="subtitles"
                                                        srcLang="en"
                                                        label="English"
                                                />
                                                Your browser does not support the video tag.
                                        </video>
                                        <h4 className="text-xl font-semibold mb-4">{t("title_3")}</h4>
                                        <Text>{t("description3")}</Text>
                                </div>
                                <div className="text-balance">
                                        <video width="320" height="240" muted loop preload="none" autoPlay>
                                                <source src="/videos/knowledge.mp4" type="video/mp4" />
                                                <track
                                                        src="/path/to/captions.vtt"
                                                        kind="subtitles"
                                                        srcLang="en"
                                                        label="English"
                                                />
                                                Your browser does not support the video tag.
                                        </video>
                                        <h4 className="text-xl font-semibold mb-4">{t("title_4")}</h4>
                                        <Text>{t("description4")}</Text>
                                </div>
                        </div>

                        <div className="flex gap-8 flex-col items-center justify-center mt-16">
                                <span className="text-balance sm:text-xl text-center">{t("cta_text")}</span>
                                <ShimmerButton text={t("cta_button")} />
                        </div>
                </div>
        );
}
