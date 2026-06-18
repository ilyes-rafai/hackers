"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import CyberButtonPrimary from "../components/CyberButtonPrimary";
import CyberButtonSecondary from "../components/CyberButtonSecondary";
import Text from "../components/Text";
import Title from "../components/Title";
import HeroTicker from "./HeroTicker";

function Hero() {
        const t = useTranslations("Hero");

        return (
                // <section className="dhad-container text-center items-center overflow-hidden min-h-[70vh] flex flex-col justify-center w-full sm:w-4xl">
                <section className="dhad-container text-center items-center overflow-hidden min-h-[82vh] flex flex-col justify-center w-full sm:w-4xl bg-no-repeat bg-contain bg-center bg-[url('/img/hero-bg.png')]">
                        <div className="relative max-w-2xl mx-auto mb-8 pt-3 font-mono select-none">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-0.5 bg-white dark:bg-black border border-neutral-300 dark:border-[#FF0000]/50 shadow-md rounded-xs">
                                        <div className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75" />
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF0000]" />
                                        </div>

                                        <span className="text-[9px] tracking-[0.35em] font-black text-[#FF0000] uppercase pl-0.5">
                                                SYS_OBJECTIVE
                                        </span>
                                </div>

                                <div className="relative pt-6 pb-5 px-6 text-center border border-neutral-200/80 dark:border-neutral-800/60 bg-white/60 dark:bg-black/30 backdrop-blur-xl rounded-xs shadow-[inset_0_0_20px_rgba(255,0,0,0.01)] overflow-hidden group">
                                        <span
                                                className="absolute inset-x-0 h-1 bg-linear-to-r from-transparent via-[#FF0000]/40 to-transparent pointer-events-none animate-[scan_5s_linear_infinite]"
                                                style={{ animationName: "scan-kf" }}
                                        />

                                        <style>{`
                                        @keyframes scan-kf {
                                                0% { top: 0%; opacity: 0; }
                                                5% { opacity: 1; }
                                                95% { opacity: 1; }
                                                100% { top: 100%; opacity: 0; }
                                        }
                                        `}</style>

                                        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FF0000]" />
                                        <span className="absolute top-0 right-0 w-1 h-1 bg-[#FF0000]/30 dark:bg-[#FF0000]/40" />
                                        <span className="absolute bottom-0 left-0 w-1 h-1 bg-[#FF0000]/30 dark:bg-[#FF0000]/40" />
                                        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FF0000]" />

                                        <span className="absolute top-1.5 right-2.5 text-[8px] text-neutral-400 dark:text-neutral-600 tracking-normal opacity-60 uppercase">
                                                [idx_01]
                                        </span>
                                        <span className="absolute bottom-1.5 left-2.5 text-[8px] text-neutral-400 dark:text-neutral-600 tracking-normal opacity-60 uppercase">
                                                core_active //
                                        </span>

                                        <p className="text-xs sm:text-sm tracking-widest uppercase font-semibold bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent leading-relaxed inline-flex items-center justify-center gap-1">
                                                <span className="text-[#FF0000]/40 font-normal mr-0.5 select-none text-[10px]">
                                                        //
                                                </span>
                                                {t("label")}
                                                <span className="text-[#FF0000] font-bold animate-[pulse_1s_infinite] ml-0.5 text-xs">
                                                        _
                                                </span>
                                        </p>
                                </div>
                        </div>

                        <Title className="">
                                {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                        </Title>

                        <Text className="text-lg md:text-xl mb-8 leading-relaxed">{t("description")}</Text>

                        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-6 mb-16 select-none">
                                <CyberButtonPrimary label={t("button_text")} href="#formDhad" />
                                <CyberButtonSecondary label="Login now" href="#" />
                        </div>

                        <HeroTicker />
                </section>
        );
}

export default Hero;
