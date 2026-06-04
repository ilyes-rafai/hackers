"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Accordion from "../components/Accordion";
import Title from "../components/Title";

export default function Faq() {
        const t = useTranslations("Faq");

        return (
                <section className="max-w-9/12 px-4 mx-auto grid text-center items-center grid-cols-1 gap-8">
                        <div className="">
                                <Title as="h2">{t("title")}</Title>
                        </div>

                        <Accordion />
                </section>
        );
}
