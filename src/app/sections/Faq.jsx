"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Accordion from "../components/Accordion";
import Title from "../components/Title";

export default function Faq() {
        const t = useTranslations("Faq");

        return (
                <section className="dhad-container">
                        <div className="text-center mb-16">
                                <Title as="h2">{t("title")}</Title>
                        </div>

                        <div className="bg-neutral-300/10 dark:bg-neutral-900/20 backdrop-blur-2xl rounded-lg p-8">
                                <Accordion />
                        </div>
                </section>
        );
}
