import heroImage from "@/assets/hero-sweets.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Exquisite display of traditional Indian sweets"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-32">
        <p
          className="text-primary-foreground/80 tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Traditional • Handcrafted • Authentic
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Mithai <span className="gold-shimmer">Palace</span>
        </h1>
        <p
          className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Experience the timeless art of Indian sweet-making. Every piece is handcrafted 
          with love, premium ingredients, and generations of tradition.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button size="lg" asChild>
            <a href="#sweets">Explore Our Sweets</a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#contact">Order Now</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
