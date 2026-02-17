import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Sweets", href: "#sweets" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#home" className="font-heading text-2xl font-bold text-primary">
          ✦ Mithai Palace
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setAuthMode("login")}>
                Login
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">
                  {authMode === "login" ? "Welcome Back" : "Create Account"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                {authMode === "signup" && (
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input placeholder="Your name" />
                  </div>
                )}
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full">{authMode === "login" ? "Sign In" : "Sign Up"}</Button>
                <p className="text-center text-sm text-muted-foreground">
                  {authMode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                  <button
                    className="text-primary hover:underline font-medium"
                    onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                  >
                    {authMode === "login" ? "Sign Up" : "Login"}
                  </button>
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => setAuthMode("signup")}>Sign Up</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">Create Account</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full">Sign Up</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button className="text-primary hover:underline font-medium" onClick={() => setAuthMode("login")}>
                    Login
                  </button>
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-3">
            <Button variant="outline" size="sm" className="flex-1">Login</Button>
            <Button size="sm" className="flex-1">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
