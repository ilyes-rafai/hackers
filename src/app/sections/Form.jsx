"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import CyberButtonPrimary from "../components/CyberButtonPrimary";
import Plus from "../components/Plus";
import Title from "../components/Title";

function Form() {
        const t = useTranslations("Form");

        return (
                <section id="formDhad" className="relative flex flex-wrap dhad-container gap-12 items-center">
                        {/* form */}
                        <div className="flex-2">
                                <Title as="h3" className="mb-8">
                                        {t("system_ready")}
                                </Title>

                                <form dir="ltr" className="relative border hacker-card p-8">
                                        <Plus />

                                        {/* Input Fields Container */}
                                        <div className="space-y-6 relative">
                                                {/* Name Field */}
                                                <div className="flex flex-col gap-2 group">
                                                        <label
                                                                htmlFor="name"
                                                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400 select-none transition-colors duration-300 group-focus-within:text-[#FF0000]"
                                                        >
                                                                {t("label_name")}
                                                        </label>
                                                        <div className="relative hacker-card my-4 text-neutral-300 dark:text-neutral-800 group-focus-within:text-[#FF0000] dark:group-focus-within:text-[#FF0000]">
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
                                                <div className="flex flex-col gap-2 group">
                                                        <label
                                                                htmlFor="phone"
                                                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400 select-none transition-colors duration-300 group-focus-within:text-[#FF0000]"
                                                        >
                                                                {t("label_phone")}
                                                        </label>
                                                        <div className="relative hacker-card my-4 text-neutral-300 dark:text-neutral-800 group-focus-within:text-[#FF0000] dark:group-focus-within:text-[#FF0000]">
                                                                <Plus />
                                                                <input
                                                                        type="text"
                                                                        id="phone"
                                                                        className="w-full px-4 py-3 bg-white/2 border text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:bg-white/5 focus:border-[#FF0000]/50 focus:shadow-[0_0_20px_rgba(255,0,0,0.15)]"
                                                                        placeholder={t("placeholder_phone")}
                                                                />
                                                        </div>
                                                </div>

                                                <CyberButtonPrimary label="Submit Application" type="submit" />
                                        </div>
                                </form>
                        </div>

                        {/* right */}
                        <div className="flex flex-col items-center text-center p-6 relative bg-linear-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800 hacker-card text-neutral-300 dark:text-neutral-800 mx-auto">
                                {/* <Image
                                        loading="lazy"
                                        src="/img/appear.png"
                                        alt="Dhad hackers hoopoe"
                                        width={100}
                                        height={100}
                                        quality={100}
                                        className="absolute top-2 left-[1/2] -translatex-1/2 -translate-y-full"
                                /> */}

                                <Plus />

                                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
                                        <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">
                                                Live Hub
                                        </span>
                                </div>

                                <p className="text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-2">
                                        <span className="text-neutral-400 dark:text-neutral-600 font-normal text-4xl mr-0.5">
                                                +
                                        </span>
                                        273
                                </p>

                                <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-2">
                                        Global Members
                                </p>

                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-50">
                                        Part of the expanding DHAD Hackers ecosystem.
                                </p>
                        </div>
                </section>
        );
}

export default Form;
