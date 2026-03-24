import Hero from "@/components/Hero";
import Lore from "@/components/Lore";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Lore />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default Index;
