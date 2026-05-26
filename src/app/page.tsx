import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import InstagramFeed from "@/components/InstagramFeed";
import WhyM13 from "@/components/WhyM13";
import About from "@/components/About";
import Trust from "@/components/Trust";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main id="main-content">
        <Hero />
        <Services />
        <Pricing />
        <Gallery />
        <InstagramFeed />
        <WhyM13 />
        <About />
        <Trust />
        <Booking />
        <Location />
      </main>

      <Footer />
      <StickyBottomBar />
      <FloatingCTA />
      <CookieBanner />
    </>
  );
}
