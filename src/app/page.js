import AnimatedBlob from "./components/AnimatedBlob";
import SoftAurora from "./components/SoftAurora";
import SplashCursor from "./components/SplashCursor";
import Cta from "./sections/Cta";
import Fab from "./sections/Fab";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Form from "./sections/Form";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Modality from "./sections/Modality";
import Road from "./sections/Road";
import Testimonials from "./sections/Testimonials";

export default function Home() {
        return (
                <div>
                        {/* <div className="fixed -z-10 rotate-180 bottom-0! h-[50vh] opacity-40 dark:opacity-30 w-full">
                                <SoftAurora />
                        </div> */}

                        <SplashCursor
                                DENSITY_DISSIPATION={3.5}
                                VELOCITY_DISSIPATION={2}
                                PRESSURE={0.1}
                                CURL={25}
                                SPLAT_RADIUS={0.2}
                                SPLAT_FORCE={6000}
                                COLOR_UPDATE_SPEED={10}
                                SHADING
                                RAINBOW_MODE={false}
                                COLOR="#ff0000"
                        />

                        <Header />

                        <div className="dhad-container h-[5vh]"></div>

                        <Hero />

                        <div className="dhad-container h-[10vh] sm:h-[20vh]"></div>

                        <Form />
                        {/* 
                        <div className="dhad-container h-[10vh] sm:h-[20vh]"></div>

                        <Fab /> */}


                        <div className="dhad-container h-[10vh] sm:h-[20vh]"></div>

                        <Road />

                        <div className="dhad-container h-[10vh] sm:h-[20vh]"></div>

                        <Modality />

                        <div className="dhad-container h-[10vh] sm:h-[20vh]"></div>

                        <Testimonials />

                        <div className="dhad-container h-[10vh] sm:h-[20vh]"></div>

                        <Faq />

                        <div className="dhad-container h-[20vh] sm:h-[40vh]"></div>

                        <Cta />

                        <div className="dhad-container h-[10vh] sm:h-[20vh]"></div>

                        <Footer />

                        <div className="dhad-container h-[5vh]"></div>
                </div>
        );
}
