import React from "react";
import LanguageSwitcher from "../components/LangSwitcher";
import { ModeToggle } from "../components/ModeToggle";
import LogoFooter from "../Svgs/LogoFooter";
import Logofull from "../Svgs/Logofull";

export default function Header() {
        return (
                <div className="sticky w-full top-4 z-9999 p-4 backdrop-blur-md bg-white/5">
                        <div className="dhad-container flex justify-between items-center">
                                {/* <Logofull className="w-40 h-auto" /> */}
                                <LogoFooter className="h-3 sm:h-4 w-auto" />

                                <div className="flex gap-4">
                                        <LanguageSwitcher />
                                        <ModeToggle />
                                </div>
                        </div>
                </div>
        );
}
