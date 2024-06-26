import { Navbar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Offerings } from "@/components/Offerings";
import { FAQs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import Vision from "@/components/Vision";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <Vision />
      <FAQs />
      <Footer />
    </main>
  );
}
