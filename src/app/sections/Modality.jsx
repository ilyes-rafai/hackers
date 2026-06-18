"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AuroraText from "../components/Aurora";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Modality() {
        const t = useTranslations("Modality");

        return (
                <section className="">
                        <div className="grid text-center items-center grid-cols-1 dhad-container gap-16">
                                <div className="w-full sm:w-4xl mx-auto">
                                        <Title as="h2">
                                                {t("title_rest")} <AuroraText>{t("title_highlight")}</AuroraText>
                                        </Title>
                                        <Text className="mb-8">{t("description")}</Text>
                                </div>

                                <div className="flex justify-center flex-wrap items-start gap-16 text-center sm:text-left">
                                        {/* Online Learning */}
                                        <div className="w-full sm:w-78 text-center">
                                                <div className="mb-4 flex justify-center">
                                                        <Image
                                                                src="/img/learn/online.png"
                                                                alt="Online Learning"
                                                                width={200}
                                                                height={200}
                                                                loading="lazy"
                                                        />
                                                </div>
                                                <div className="text-balance">
                                                        <h4 className="text-xl font-medium mb-2">
                                                                {t("online_title")}
                                                        </h4>
                                                        <Text>{t("online_desc")}</Text>
                                                </div>
                                        </div>

                                        {/* At Your Home */}
                                        <div className="w-full sm:w-78 text-center">
                                                <div className="mb-4 flex justify-center">
                                                        <Image
                                                                src="/img/learn/home.png"
                                                                alt="At Your Home"
                                                                width={200}
                                                                height={200}
                                                                loading="lazy"
                                                        />
                                                </div>
                                                <div className="text-balance">
                                                        <h4 className="text-xl font-medium mb-2">{t("home_title")}</h4>
                                                        <Text>{t("home_desc")}</Text>
                                                </div>
                                        </div>

                                        {/* On-Site */}
                                        <div className="w-full sm:w-78 text-center">
                                                <div className="mb-4 flex justify-center">
                                                        <Image
                                                                src="/img/learn/school.png"
                                                                alt="On-Site Learning"
                                                                width={200}
                                                                height={200}
                                                                loading="lazy"
                                                        />
                                                </div>
                                                <div className="text-balance">
                                                        <h4 className="text-xl font-medium mb-2">
                                                                {t("onsite_title")}
                                                        </h4>
                                                        <Text>{t("onsite_desc")}</Text>
                                                        <a
                                                                href="https://maps.app.goo.gl/BeLiPRd9iRCP3eCe8"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="font-semibold text-[#FF0000] underline"
                                                        >
                                                                <small>{t("location_hint")}</small>
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
