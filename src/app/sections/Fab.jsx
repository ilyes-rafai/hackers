"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import Title from "../components/Title";

export default function Fab() {
        const t = useTranslations("Fab");

        return (
                <div className="relative">
                        {/* <div className="h-0.5 bg-linear-to-r from-transparent via-[#FF0000] to-transparent"></div> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center pt-8 max-w-7xl px-4 mx-auto gap-8">
                                <div className="">
                                        <div className="text-balance">
                                                <h4 className="text-xl font-medium mb-4">{t("title_1")}</h4>
                                                <p className="text-neutral-400">{t("description1")}</p>
                                        </div>
                                </div>
                                <div className="">
                                        <div className="text-balance">
                                                <h4 className="text-xl font-medium mb-4">{t("title_2")}</h4>
                                                <p className="text-neutral-400">{t("description2")}</p>
                                        </div>
                                </div>
                                <div className="">
                                        <div className="text-balance">
                                                <h4 className="text-xl font-medium mb-4">{t("title_3")}</h4>
                                                <p className="text-neutral-400">{t("description3")}</p>
                                        </div>
                                </div>
                                <div className="">
                                        <div className="text-balance">
                                                <h4 className="text-xl font-medium mb-4">{t("title_4")}</h4>
                                                <p className="text-neutral-400">{t("description4")}</p>
                                        </div>
                                </div>
                        </div>

                        <div className="flex gap-8 flex-col items-center justify-center mt-12">
                                <span className="text-balance sm:text-xl">{t("cta_text")}</span>
                                <span>{t("cta_button")}</span>
                        </div>
                </div>
        );
}
