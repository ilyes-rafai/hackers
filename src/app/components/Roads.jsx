import Image from "next/image";
import React from "react";
import Plus from "./Plus";
import Title from "./Title";

function Roads() {
        const roads = [
                {
                        title: "Web Frontend Core",
                        image: "/img/roads/1.png",
                },
                {
                        title: "UI/UX Design ",
                        image: "/img/roads/2.png",
                },
                {
                        title: "Modern Web Frontend ",
                        image: "/img/roads/3.png",
                },
                {
                        title: "Web Backend Core",
                        image: "/img/roads/4.png",
                },
                {
                        title: "Office Suite Mastery",
                        image: "/img/roads/5.png",
                },
                {
                        title: "Python Mastery",
                        image: "/img/roads/6.png",
                },
                {
                        title: "Web Hacking",
                        image: "/img/roads/7.png",
                },
                {
                        title: "Team Coding",
                        image: "/img/roads/8.png",
                },
        ];
        return (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {roads.map((road, i) => (
                                <div
                                        key={i}
                                        className="relative border p-4 flex flex-col justify-end hacker-card transition duration-300 group text-neutral-300 dark:text-neutral-800"
                                >
                                        <Plus />

                                        <div className="mb-4">
                                                <Image
                                                        src={road.image}
                                                        alt={road.title}
                                                        width={200}
                                                        height={200}
                                                        className="object-contai grayscale-100 w-[50%] transition duration-300 group-hover:grayscale-0"
                                                />
                                        </div>

                                        <div dir="ltr" className="">
                                                <Title as="h3">{road.title}</Title>
                                        </div>
                                </div>
                        ))}
                </div>
        );
}

export default Roads;
