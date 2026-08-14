import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CategorySection from "./components/CategorySection";
import ClubsSection from "./components/ClubsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import LocationSection from "./components/LocationSection";
import ReviewsSection from "./components/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CategorySection />
        <ClubsSection />
        <HowItWorksSection />
        <LocationSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}