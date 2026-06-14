import AnimatedBlob from "./components/AnimatedBlob";
import SoftAurora from "./components/SoftAurora";
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
                        <div className="bg-no-repeat bg-contain bg-center bg-[url('/img/hero-bg.png')] h-screen fixed inset-0 -z-50"></div>

                        <div className="fixed -z-10 rotate-180 bottom-0! h-[50vh] opacity-30 w-full">
                                <SoftAurora />
                        </div>

                        <Header />

                        <div className="h-[5vh]"></div>

                        <Hero />

                        <div className="h-[5vh]"></div>

                        <Fab />

                        <div className="h-[10vh] sm:h-[20vh]"></div>

                        <Road />

                        <div className="h-[10vh] sm:h-[20vh]"></div>

                        <Modality />

                        <div className="h-[10vh] sm:h-[20vh]"></div>

                        <Testimonials />

                        <div className="h-[10vh] sm:h-[20vh]"></div>

                        <Faq />

                        <div className="h-[10vh] sm:h-[20vh]"></div>

                        <Cta />

                        <div className="h-[10vh] sm:h-[20vh]"></div>

                        <Footer />

                        <div className="h-[5vh]"></div>
                </div>
        );
}
