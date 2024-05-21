import { Faqs } from "@/components/Faqs";
import { Feature } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
      <Faqs />
      <Footer />
    </main>
  );
}
