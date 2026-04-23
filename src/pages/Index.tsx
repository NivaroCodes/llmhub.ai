import { Navbar } from "@/components/llmhub/Navbar";
import { Hero } from "@/components/llmhub/Hero";
import { WhatItDoes } from "@/components/llmhub/WhatItDoes";
import { ProblemSolution } from "@/components/llmhub/ProblemSolution";
import { Architecture } from "@/components/llmhub/Architecture";
import { Features } from "@/components/llmhub/Features";
import { SocialProof } from "@/components/llmhub/SocialProof";
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
        <ProblemSolution />
        <Architecture />
        <Features />
        <SocialProof />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
