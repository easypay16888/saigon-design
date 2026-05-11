import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Câu Chuyện / Story", href: "#about" },
    { name: "Thực Đơn / Menu", href: "#menu" },
    { name: "Không Gian / Space", href: "#ambiance" },
    { name: "Liên Hệ / Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-border/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex flex-col items-center z-50" data-testid="link-logo">
          <span className="font-serif text-2xl tracking-widest text-primary group-hover:text-primary/80 transition-colors uppercase">
            Ô Tình
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] text-foreground/70 uppercase">
            House
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              data-testid={`nav-link-${link.href.replace('#', '')}`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none font-serif tracking-widest uppercase text-xs px-6"
            onClick={() => handleNavClick("#contact")}
            data-testid="button-book-table"
          >
            Đặt Bàn / Reserve
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-background flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
            mobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-xl font-serif tracking-widest text-foreground hover:text-primary transition-colors"
                data-testid={`mobile-nav-link-${link.href.replace('#', '')}`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-serif tracking-widest uppercase text-sm px-8 py-6"
              onClick={() => handleNavClick("#contact")}
              data-testid="mobile-button-book-table"
            >
              Đặt Bàn / Reserve
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
