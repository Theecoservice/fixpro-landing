import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import VideoSection from "@/components/VideoSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Categories />
      <VideoSection />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
