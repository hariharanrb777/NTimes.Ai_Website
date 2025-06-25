import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Products from "@/components/sections/products";
import Solutions from "@/components/sections/solutions";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
