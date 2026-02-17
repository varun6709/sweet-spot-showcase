const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-background mb-3">✦ Mithai Palace</h3>
            <p className="text-sm text-background/60 leading-relaxed">
              Crafting the finest Indian sweets since 2000. Every piece tells a story of tradition and love.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-background/60 hover:text-background transition-colors">Home</a>
              <a href="#sweets" className="block text-background/60 hover:text-background transition-colors">Our Sweets</a>
              <a href="#about" className="block text-background/60 hover:text-background transition-colors">About Us</a>
              <a href="#contact" className="block text-background/60 hover:text-background transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-3">We Deliver!</h4>
            <p className="text-sm text-background/60 leading-relaxed">
              Same-day delivery available across Delhi NCR. Nationwide shipping for festive orders.
            </p>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
          © 2026 Mithai Palace. All rights reserved. Made with ♥ and tradition.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
