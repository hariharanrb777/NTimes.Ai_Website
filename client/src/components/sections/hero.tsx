import { Button } from "@/components/ui/button";
import bannerPath from "@assets/NTimes.AI banner_1750851041170.jpg";

export default function Hero() {
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
  };

  return (
    <section id="home" className="relative gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-800 leading-tight mb-6">
              Empowering Global{" "}
              <span className="text-primary">Businesses</span>{" "}
              with AI Solutions
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI automation, intelligent features, and seamless integrations that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection("solutions")}
                className="bg-primary text-white hover:bg-secondary px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                Explore Solutions
              </Button>
              <Button 
                onClick={() => scrollToSection("products")}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                View Products
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={bannerPath} 
              alt="Business Growth and Success Journey" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
