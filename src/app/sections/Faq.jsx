import React from "react";
import Accordion from "../components/Accordion";

export default function Faq() {
        return (
                <section className="max-w-7xl px-4 mx-auto grid text-center items-center grid-cols-1 gap-8">
                        <div className="">
                                <h2 className="text-balance text-4xl sm:text-6xl mb-4 tracking-tight font-bold">
                                        Frequently Asked Questions
                                </h2>
                        </div>

                        <Accordion />
                </section>
        );
}
