import Hero from "@/components/Hero";
import ChartEmbed from "@/components/ChartEmbed";
import MemeGenerator from "@/components/MemeGenerator";
import Lore from "@/components/Lore";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ChartEmbed />
      <MemeGenerator />
      <Lore />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default Index;
