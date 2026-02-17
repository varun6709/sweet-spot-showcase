import gulabJamun from "@/assets/gulab-jamun.jpg";
import rasgulla from "@/assets/rasgulla.jpg";
import barfi from "@/assets/barfi.jpg";
import jalebi from "@/assets/jalebi.jpg";
import kajuKatli from "@/assets/kaju-katli.jpg";
import laddu from "@/assets/laddu.jpg";
import peda from "@/assets/peda.jpg";
import mysorePak from "@/assets/mysore-pak.jpg";
import sandesh from "@/assets/sandesh.jpg";
import chamcham from "@/assets/chamcham.jpg";
import soanPapdi from "@/assets/soan-papdi.jpg";
import rasmalai from "@/assets/rasmalai.jpg";
import kalakand from "@/assets/kalakand.jpg";

const sweets = [
  { name: "Gulab Jamun", image: gulabJamun, description: "Soft milk dumplings soaked in rose-flavored sugar syrup, a timeless classic loved across India", price: "₹250/kg" },
  { name: "Rasgulla", image: rasgulla, description: "Spongy cottage cheese balls simmered in light cardamom-infused sugar syrup", price: "₹280/kg" },
  { name: "Barfi", image: barfi, description: "Rich creamy milk fudge layered with pistachios, almonds and silver foil", price: "₹350/kg" },
  { name: "Jalebi", image: jalebi, description: "Crispy golden spirals deep-fried and drenched in warm saffron syrup", price: "₹200/kg" },
  { name: "Kaju Katli", image: kajuKatli, description: "Diamond-shaped cashew fudge delicately topped with edible silver foil", price: "₹500/kg" },
  { name: "Laddu", image: laddu, description: "Traditional besan laddu enriched with pure ghee, nuts and cardamom", price: "₹300/kg" },
  { name: "Peda", image: peda, description: "Soft milk fudge flavored with saffron, cardamom and topped with pistachios", price: "₹320/kg" },
  { name: "Mysore Pak", image: mysorePak, description: "Melt-in-mouth ghee-rich gram flour fudge, a royal Mysore specialty", price: "₹380/kg" },
  { name: "Sandesh", image: sandesh, description: "Delicate Bengali cottage cheese sweet with pistachio and rose flavoring", price: "₹340/kg" },
  { name: "Cham Cham", image: chamcham, description: "Colorful spongy Bengali milk sweet coated with fresh coconut shavings", price: "₹300/kg" },
  { name: "Soan Papdi", image: soanPapdi, description: "Flaky crispy layered sweet with a melt-in-mouth texture and nutty flavor", price: "₹260/kg" },
  { name: "Rasmalai", image: rasmalai, description: "Soft paneer discs floating in creamy saffron and cardamom flavored milk", price: "₹400/kg" },
  { name: "Kalakand", image: kalakand, description: "Grainy milk cake with a rich texture, garnished with pistachios and almonds", price: "₹360/kg" },
];

const SweetsSection = () => {
  return (
    <section id="sweets" className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">
            Our Specialties
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Handcrafted Sweets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each sweet is made fresh daily using time-honored family recipes passed down through generations. 
            We use only the finest ingredients — pure desi ghee, fresh milk, premium dry fruits, and authentic saffron — 
            to bring you the most delicious traditional Indian sweets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sweets.map((sweet, index) => (
            <div
              key={sweet.name}
              className="group bg-card rounded-lg overflow-hidden border border-border card-hover"
              style={{
                animation: `sweet-float 3s ease-in-out infinite`,
                animationDelay: `${index * 0.25}s`,
              }}
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
                <p className="text-muted-foreground text-sm leading-relaxed">{sweet.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            🎉 Custom gift boxes available for festivals & celebrations — contact us for bulk orders!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SweetsSection;
