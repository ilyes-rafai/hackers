"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import { MagicIcon } from "../components/Icones";
import OrbitingSkills from "../components/OrbitingSkills";
import Plus from "../components/Plus";
import ShimmerButton from "../components/Shimmer";
import Text from "../components/Text";
import Title from "../components/Title";

function Form() {
        const t = useTranslations("Form");

        return (
                <section id="formDhad" className="relative flex flex-wrap dhad-container gap-12 items-center">
                        <div className="flex-2">
                                <Title as="h3" className="mb-8">
                                        {t("system_ready")}
                                </Title>

                                <form dir="ltr" className="relative border hacker-card p-8 group">
                                        <Plus />
                                        {/* Form Title */}

                                        {/* Input Fields Container */}
                                        <div className="space-y-6 relative">
                                                {/* Name Field */}
                                                <div className="flex flex-col gap-2">
                                                        <label
                                                                htmlFor="name"
                                                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400 select-none transition-colors duration-300 group-focus-within:text-[#FF0000]"
                                                        >
                                                                {t("label_name")}
                                                        </label>
                                                        <div className="relative hacker-card my-4 text-neutral-300 dark:text-neutral-800">
                                                                <Plus />
                                                                <input
                                                                        type="text"
                                                                        id="name"
                                                                        className="w-full px-4 py-3 bg-white/2 border text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:bg-white/5 focus:border-[#FF0000]/50 focus:shadow-[0_0_20px_rgba(255,0,0,0.15)]"
                                                                        placeholder={t("placeholder_name")}
                                                                />
                                                        </div>
                                                </div>

                                                {/* Phone Field */}
                                                <div className="flex flex-col gap-2">
                                                        <label
                                                                htmlFor="phone"
                                                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400 select-none transition-colors duration-300 group-focus-within:text-[#FF0000]"
                                                        >
                                                                {t("label_phone")}
                                                        </label>
                                                        <div className="relative hacker-card my-4 text-neutral-300 dark:text-neutral-800">
                                                                <Plus />
                                                                <input
                                                                        type="text"
                                                                        id="phone"
                                                                        className="w-full px-4 py-3 bg-white/2 border text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:bg-white/5 focus:border-[#FF0000]/50 focus:shadow-[0_0_20px_rgba(255,0,0,0.15)]"
                                                                        placeholder={t("placeholder_phone")}
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                </form>
                        </div>

                        <div className="flex justify-center relative z-10 flex-1">
                                {/* <OrbitingSkills /> */}
                                <div className="text-9xl">313</div>
                        </div>
                </section>
        );
}

export default Form;
