import React from "react";
import {
        BootstrapIcon,
        CSSIcon,
        FigmaIcon,
        GithubIcon,
        HTMLIcon,
        JSIcon,
        LaravelIcon,
        PHPIcon,
        PythonIcon,
        ReactIcon,
        SassIcon,
        TailwindIcon,
} from "../components/Icones";

export default function LogoTicker() {
        const icons = [
                BootstrapIcon,
                CSSIcon,
                FigmaIcon,
                GithubIcon,
                HTMLIcon,
                JSIcon,
                LaravelIcon,
                PHPIcon,
                PythonIcon,
                ReactIcon,
                SassIcon,
                TailwindIcon,
        ];

        const translationDistance = "-130rem";
        const tripleIcons = [...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons];
        return (
                <div className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
                        <style>{`
        @keyframes ticker-kf {
          0% { transform: translateX(0); }
          100% { transform: translateX(${translationDistance}); }
        }
      `}</style>

                        <div className="flex -mx-4 animate-[ticker-kf_100s_linear_infinite]">
                                {tripleIcons.map((Icon, index) => (
                                        <div
                                                key={`orig-${index}`}
                                                className="w-10 sm:w-16 p-2 rounded-4xl aspect-square flex-none mx-4 self-start max-w-full h-auto hover:text-[#FF0000] text-black dark:text-white transition duration-500 flex place-content-center"
                                        >
                                                <Icon />
                                        </div>
                                ))}
                        </div>
                </div>
        );
}
