"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import { MagicIcon } from "../components/Icones";
import OrbitingSkills from "../components/OrbitingSkills";
import ShimmerButton from "../components/Shimmer";
import Text from "../components/Text";
import Title from "../components/Title";

export default function FormTerminal() {
        const t = useTranslations("Form");

        return (
                <section
                        id="formDhad"
                        className="relative grid grid-cols-1 md:grid-cols-2 dhad-container gap-12 items-center overflow-hidden"
                >
                        <div className="bg-white/5 backdrop-blur-2xl rounded-xl flex justify-center relative z-10">
                                <OrbitingSkills />
                        </div>

                        <form
                                dir="ltr"
                                className="bg-white/5 backdrop-blur-2xl rounded-xl font-mono font-black overflow-hidden"
                        >
                                {/* Terminal Header */}
                                <div className="bg-white/10 px-4 py-3 flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-700"></div>
                                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <span className="ml-3 text-xs text-neutral-500 select-none">
                                                root@dhadx: {t("path")}
                                        </span>
                                </div>

                                {/* Terminal Body */}
                                <div className="p-6 md:p-8 space-y-8">
                                        <p className="dark:text-neutral-400 text-neutral-600 text-sm leading-relaxed">
                                                <span className="text-[#FF0000] font-bold mr-2">➜</span>
                                                <span className="text-orange-400 font-bold mr-2">~</span>
                                                {t("system_ready")}
                                        </p>

                                        <div className="space-y-6">
                                                {/* Name Input */}
                                                <div className="flex flex-col gap-2 group">
                                                        <label
                                                                htmlFor="fullName"
                                                                className="text-sm text-neutral-400 shrink-0 select-none flex items-center gap-2"
                                                        >
                                                                <span className="text-[#FF0000]">root@dhadx</span>
                                                                <span className="text-black dark:text-white">:</span>
                                                                <span className="text-orange-400">~/join</span>
                                                                <span className="text-black dark:text-white">
                                                                        $ {t("label_name")}
                                                                </span>
                                                        </label>
                                                        <input
                                                                type="text"
                                                                id="fullName"
                                                                className="flex-1 bg-transparent border-none dark:text-neutral-200 text-neutral-800 text-sm focus:ring-0 focus:outline-none caret-[#FF0000] dark:placeholder-neutral-500 placeholder-neutral-600 py-0"
                                                                placeholder={t("placeholder_name")}
                                                                autoComplete="off"
                                                                required
                                                        />
                                                </div>

                                                {/* Phone Input */}
                                                <div className="flex flex-col gap-2 group">
                                                        <label
                                                                htmlFor="phoneNumber"
                                                                className="text-sm text-neutral-400 shrink-0 select-none flex items-center gap-2"
                                                        >
                                                                <span className="text-[#FF0000]">root@dhadx</span>
                                                                <span className="text-black dark:text-white">:</span>
                                                                <span className="text-orange-400">~/join</span>
                                                                <span className="text-black dark:text-white">
                                                                        $ {t("label_phone")}
                                                                </span>
                                                        </label>
                                                        <input
                                                                type="tel"
                                                                id="phoneNumber"
                                                                className="flex-1 bg-transparent border-none dark:text-neutral-200 text-neutral-800 text-sm focus:ring-0 focus:outline-none caret-[#FF0000] dark:placeholder-neutral-500 placeholder-neutral-600 py-0"
                                                                placeholder={t("placeholder_phone")}
                                                                autoComplete="off"
                                                                required
                                                        />
                                                </div>
                                        </div>

                                        {/* Submit Area */}
                                        <div className="pt-4 flex flex-col gap-4">
                                                {/* <div className="flex items-center gap-2 text-sm text-neutral-400 select-none hidden sm:flex">
                                                <span className="text-[#FF0000]">root@dhadx</span>
                                                <span className="text-black dark:text-white">:</span>
                                                <span className="text-orange-400">~/join</span>
                                                <span className="text-black dark:text-white">$ {t("execute")}</span>
                                                <span className="w-2 h-4 bg-[#FF0000] animate-pulse ml-1"></span>
                                        </div> */}

                                                <div className="w-full">
                                                        <button
                                                                type="submit"
                                                                className="w-full bg-transparent border border-[#FF0000]/50 text-[#FF0000] hover:bg-[#FF0000] hover:text-[#0a0a0a] hover:border-[#FF0000] transition-all duration-200 px-6 py-2.5 text-sm font-bold tracking-widest uppercase cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF0000]/50"
                                                        >
                                                                {t("button")}
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </form>
                </section>
        );
}
