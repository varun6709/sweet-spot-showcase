import heroImage from "@/assets/hero-sweets.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Our sweet shop display"
                className="w-full h-80 md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-heading text-3xl font-bold">25+</p>
              <p className="text-sm">Years of Tradition</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Legacy of Sweetness
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For over 25 years, Mithai Palace has been crafting the finest Indian sweets 
              using traditional recipes passed down through generations. Our master sweet-makers 
              use only the purest ghee, fresh milk, and premium dry fruits.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From festive celebrations to everyday indulgence, every box from Mithai Palace 
              carries the warmth of tradition and the promise of unmatched quality. We take 
              pride in making each piece a work of art.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="font-heading text-2xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground text-xs mt-1">Sweet Varieties</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="font-heading text-2xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground text-xs mt-1">Pure Ingredients</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="font-heading text-2xl font-bold text-primary">10K+</p>
                <p className="text-muted-foreground text-xs mt-1">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
