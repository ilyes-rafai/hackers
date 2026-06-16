import React from "react";
import Logofull from "../Svgs/Logofull";
import LanguageSwitcher from "../components/LangSwitcher";
import { ModeToggle } from "../components/ModeToggle";

export default function Header() {
        return (
                <div className="sticky w-full top-4 z-9999 p-4 backdrop-blur-md bg-white/5">
                        <div className="dhad-container flex justify-between items-center">
                                <Logofull className="w-40 h-auto" />

                                <div className="flex gap-4">
                                        <LanguageSwitcher />
                                        <ModeToggle />
                                </div>
                        </div>
                </div>
        );
}
