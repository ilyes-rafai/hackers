import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import CyberButtonPrimary from "../components/CyberButtonPrimary";
import Roads from "../components/Roads";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Road() {
        const t = useTranslations("Road");

        return (
                <section className="dhad-container">
                        <div className="text-center mb-16">
                                <Title as="h2">
                                        <AuroraText>{t("title_highlight")}</AuroraText> {t("title_rest")}
                                </Title>

                                <div className="mb-8 w-full sm:w-4xl mx-auto">
                                        <Text className="">{t("description")}</Text>
                                </div>

                                <CyberButtonPrimary label={t("button_text")} href="#formDhad" />
                        </div>

                        <Roads />
                </section>
        );
}
