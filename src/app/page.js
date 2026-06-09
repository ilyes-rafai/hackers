import AnimatedBlob from "./components/AnimatedBlob";
import SoftAurora from "./components/SoftAurora";
import Cta from "./sections/Cta";
import Fab from "./sections/Fab";
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
                        <div className="fixed -z-10 rotate-180 bottom-0! h-[50vh] opacity-30 w-full">
                                <SoftAurora />
                        </div>

                        {/* <div className="fixed w-full flex -z-10 h-fit left-0 bottom-0 border border-yellow-500">
                                <AnimatedBlob />
                                <AnimatedBlob />
                                <AnimatedBlob />
                                <AnimatedBlob />
                                <AnimatedBlob />
                                <AnimatedBlob />
                        </div> */}

                        <Header />

                        <div className="h-[5vh] sm:h-[10vh]"></div>

                        <Hero />

                        <div id="formDhad" className="h-[10vh] sm:h-[20vh]"></div>

                        {/* <div className="h-[10vh] sm:h-[20vh] flex justify-center items-center bg-black ">
                                <h1 className="text-white text-9xl font-bold">FORM HERE</h1>
                        </div>

                        <div className="h-[10vh] sm:h-[20vh]"></div> */}

                        <Fab />

                        <div className="h-[10vh] sm:h-[20vh]"></div>

                        <Road />

                        <div className="h-[20vh]"></div>

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

                        <Cta />

                        <div className="h-[20vh]"></div>

                        <Footer />
                </div>
        );
}
