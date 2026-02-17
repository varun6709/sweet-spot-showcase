import gulabJamun from "@/assets/gulab-jamun.jpg";
import rasgulla from "@/assets/rasgulla.jpg";
import barfi from "@/assets/barfi.jpg";
import jalebi from "@/assets/jalebi.jpg";
import kajuKatli from "@/assets/kaju-katli.jpg";
import laddu from "@/assets/laddu.jpg";
import peda from "@/assets/peda.jpg";

const sweets = [
  { name: "Gulab Jamun", image: gulabJamun, description: "Soft milk dumplings soaked in rose-flavored sugar syrup", price: "₹250/kg" },
  { name: "Rasgulla", image: rasgulla, description: "Spongy cottage cheese balls in light sugar syrup", price: "₹280/kg" },
  { name: "Barfi", image: barfi, description: "Rich milk fudge with pistachios and almonds", price: "₹350/kg" },
  { name: "Jalebi", image: jalebi, description: "Crispy golden spirals drenched in saffron syrup", price: "₹200/kg" },
  { name: "Kaju Katli", image: kajuKatli, description: "Diamond-shaped cashew fudge with silver foil", price: "₹500/kg" },
  { name: "Laddu", image: laddu, description: "Traditional besan laddu with nuts and cardamom", price: "₹300/kg" },
  { name: "Peda", image: peda, description: "Soft milk fudge flavored with saffron and cardamom", price: "₹320/kg" },
];

const SweetsSection = () => {
  return (
    <section id="sweets" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">
            Our Specialties
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Handcrafted Sweets
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each sweet is made fresh daily using time-honored recipes and the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sweets.map((sweet, index) => (
            <div
              key={sweet.name}
              className="group bg-card rounded-lg overflow-hidden border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={sweet.image}
                  alt={sweet.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl font-semibold text-card-foreground">
                    {sweet.name}
                  </h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">
                    {sweet.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{sweet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SweetsSection;
