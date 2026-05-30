"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Logofull from "../Svgs/Logofull";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "../components/Icones";
import ShinyText from "../components/ShinyText";

// Import your icons as before

export default function Footer() {
        const t = useTranslations("Footer");

        const socialIcons = [
                {
                        name: "Facebook",
                        href: "https://www.facebook.com/dhadhackers",
                        svg: <FacebookIcon className="size-6" />,
                },
                {
                        name: "Instagram",
                        href: "https://www.instagram.com/dhadhackers/",
                        svg: <InstagramIcon className="size-6" />,
                },
                { name: "TikTok", href: "https://www.tiktok.com/@dhadhackers", svg: <TikTokIcon className="size-6" /> },
        ];

        return (
                <footer className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                                {/* <div className="mb-6 w-full">
                                        <Logofull
                                                width="100%"
                                                className="w-full h-auto"
                                                primaryColor="#f00"
                                                secondaryColor="#f00"
                                        />
                                </div> */}

                                <div className="my-6 flex flex-wrap justify-center gap-4 text-sm">
                                        {socialIcons.map((icon) => (
                                                <a
                                                        key={icon.name}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={icon.name}
                                                        className="text-white hover:text-[#FF0000] hover:scale-110 transition-all duration-300"
                                                        href={icon.href}
                                                >
                                                        {icon.svg}
                                                </a>
                                        ))}
                                </div>

                                <p className="text-center font-semibold text-white mt-4">
                                        <ShinyText
                                                text={`© ${new Date().getFullYear()} DHAD Hackers ${t("rights")}`}
                                                speed={3}
                                                delay={0}
                                                color="#a0a0a0"
                                                shineColor="#ffffff"
                                                spread={120}
                                                direction="left"
                                                yoyo={false}
                                                pauseOnHover={false}
                                                disabled={false}
                                        />
                                </p>

                                <div className="flex items-center justify-center mt-4 gap-2">
                                        <a
                                                href="#"
                                                className="text-white hover:text-[#FF0000] transition-colors duration-300 text-sm underline"
                                        >
                                                {t("trademark")}
                                        </a>
                                        <span className="text-white">|</span>
                                        <a
                                                href="#"
                                                className="text-white hover:text-[#FF0000] transition-colors duration-300 text-sm underline"
                                        >
                                                {t("privacy")}
                                        </a>
                                </div>
                        </div>
                </footer>
        );
}
