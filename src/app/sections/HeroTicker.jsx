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
                <div className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
                        <style>{`
        @keyframes ticker-kf {
          0% { transform: translateX(0); }
          100% { transform: translateX(${translationDistance}); }
        }
      `}</style>

                        <div className="flex -mx-4 animate-[ticker-kf_100s_linear_infinite]">
                                {/* First original set of icons */}
                                {tripleIcons.map((Icon, index) => (
                                        <div
                                                key={`orig-${index}`}
                                                className="w-fit flex-none mx-4 self-start max-w-full h-auto text-gray-600 grayscale-100 opacity-50"
                                        >
                                                <Icon />
                                        </div>
                                ))}
                        </div>
                </div>
        );
}
