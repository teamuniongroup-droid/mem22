import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <VideoSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
