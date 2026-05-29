import Image from "next/image";
import React from "react";
import Logofull from "../Svgs/Logofull";
import LanguageSwitcher from "../components/LangSwitcher";

export default function Header() {
        return (
                <div className="sticky top-8 w-full z-99 flex justify-between items-center mt-8 p-4 px-16 max-w-7xl mx-auto backdrop-blur-md bg-black/5 rounded-full">
                        <div className="">
                                <Logofull width={150} />
                        </div>
                        <div className="">
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
