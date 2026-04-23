import { Navbar } from "@/components/llmhub/Navbar";
import { Hero } from "@/components/llmhub/Hero";
import { WhatItDoes } from "@/components/llmhub/WhatItDoes";
import { HowItWorks } from "@/components/llmhub/HowItWorks";
import { CodeBlock } from "@/components/llmhub/CodeBlock";
import { ForBusiness } from "@/components/llmhub/ForBusiness";
import { Pricing } from "@/components/llmhub/Pricing";
import { FinalCTA } from "@/components/llmhub/FinalCTA";
import { Footer } from "@/components/llmhub/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhatItDoes />
        <HowItWorks />
        <CodeBlock />
        <ForBusiness />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
