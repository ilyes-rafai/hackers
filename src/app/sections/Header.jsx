import Image from "next/image";
import React from "react";
import Logofull from "../Svgs/Logofull";
import LanguageSwitcher from "../components/LangSwitcher";

export default function Header() {
        return (
                <div className="sticky top-8 w-11/12 mx-auto z-99 mt-8 p-4 px-16 backdrop-blur-md bg-white/5 rounded-full">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                                <Logofull className="w-40 h-auto" />
                                <LanguageSwitcher />
                        </div>
                        {/* <a href="tel:+212727283846" target="_blank" className="hidden md:flex items-center gap-4">
                                <Image
                                        src="/img/mascot-support.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                />
                                <span>+212 7 27 28 38 46</span>
                        </a> */}
                </div>
        );
}
