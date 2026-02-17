import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "42 Sweet Lane, Chandni Chowk, Old Delhi, 110006" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "orders@mithaipalace.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sun: 8:00 AM – 10:00 PM" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Place your orders or reach out for bulk and festive inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social / extra buttons */}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="font-heading text-xl font-semibold text-card-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message..." rows={4} />
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
