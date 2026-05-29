import DotField from "./components/DotField";
import SoftAurora from "./components/SoftAurora";
import CustomRoadmapBuilder from "./sections/Custom";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Modality from "./sections/Modality";
import Road from "./sections/Road";
import Testimonials from "./sections/Testimonials";

export default function Home() {
        return (
                <div>
                        <div className="fixed inset-0 -z-10 w-full rotate-180  opacity-30">
                                <SoftAurora />
                        </div>

                        <div className="fixed inset-0 -z-10 w-full rotate-180  opacity-30">
                                <div style={{ width: "100%", height: "100vh", position: "relative" }}>
                                        <DotField
                                                dotRadius={2}
                                                dotSpacing={14}
                                                bulgeStrength={67}
                                                glowRadius={160}
                                                sparkle={true}
                                                waveAmplitude={0}
                                                cursorRadius={500}
                                                cursorForce={0.1}
                                                bulgeOnly
                                                gradientFrom="#EE2F03"
                                                gradientTo="#EE2F03"
                                                glowColor="#000000"
                                        />
                                </div>
                        </div>

                        <Header />

                        <div className="h-[5vh] sm:h-[10vh]"></div>

                        <Hero />

                        <div className="h-[10vh] sm:h-[20vh]"></div>

                        <Road />

                        <div className="h-[20vh]"></div>

                        <CustomRoadmapBuilder />

                        <div className="h-[20vh]"></div>

                        {/* <div className="h-[20vh]"></div> */}

                        {/* <div className="bg-white/5 h-[50vh] pointer-events-none flex justify-center items-center backdrop-blur-md">
                                <div className="text-9xl text-[#FF0000] font-black">CTA</div>
                        </div> */}

                        {/* <div className="h-[20vh]"></div> */}

                        <Modality />

                        <div className="h-[20vh]"></div>

                        <Testimonials />

                        {/* <div className="h-[20vh]"></div>

                        <div className="bg-white/5 h-[50vh] pointer-events-none flex justify-center items-center backdrop-blur-md">
                                <div className="text-9xl text-[#FF0000] font-black">CTA</div>
                        </div> */}

                        <div className="h-[20vh]"></div>

                        <Faq />

                        <div className="h-[20vh]"></div>

                        <Footer />
                </div>
        );
}
