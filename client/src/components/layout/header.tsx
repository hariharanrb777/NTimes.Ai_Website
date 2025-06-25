import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/N times Logo-13_1750851041172.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "products", "solutions", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "solutions", label: "Solutions" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-neutral-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logoPath} alt="NTimes.AI Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 font-medium ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-neutral-600 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white hover:bg-secondary"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neutral-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-neutral-600 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary text-white hover:bg-secondary mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
