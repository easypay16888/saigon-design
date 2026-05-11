import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Phone, Mail, Instagram, Star } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="O Tinh House Interior" 
            className="w-full h-full object-cover opacity-40 scale-105 transform transition-transform duration-10000 hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            <h2 className="text-primary tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6">
              Contemporary Vietnamese Cuisine
            </h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium tracking-tight mb-8 leading-tight max-w-4xl mx-auto">
              A whispered secret in the heart of Saigon.
            </h1>
            <p className="text-foreground/80 max-w-xl mx-auto text-lg md:text-xl font-light mb-12">
              Where traditional Hue flavors meet modern elegance in a restored old Vietnamese home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-serif tracking-widest uppercase text-sm px-10 py-7 w-full sm:w-auto transition-all"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="hero-button-reserve"
              >
                Đặt Bàn / Reserve
              </Button>
              <Button 
                variant="outline" 
                className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-none font-serif tracking-widest uppercase text-sm px-10 py-7 w-full sm:w-auto transition-all"
                onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="hero-button-menu"
              >
                Thực Đơn / Menu
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-4">Câu Chuyện / Our Story</h2>
              <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-foreground">
                More personal than fine dining, more refined than a tourist spot.
              </h3>
              <div className="space-y-6 text-foreground/70 font-light leading-relaxed">
                <p>
                  Tucked away in Saigon's vibrant Cong Quynh street, Ô Tình House is a lovingly restored sanctuary. The name "Ô Tình" evokes the nostalgic charm of old Saigon—a space that feels like a beautiful vintage home waiting to welcome you.
                </p>
                <p>
                  We are a family-run establishment serving contemporary Vietnamese cuisine anchored in the deep, complex flavor profiles of Hue. Every bowl of pho, every carefully plated dish feels like it was crafted just for you.
                </p>
                <p>
                  With warm amber lighting, smooth jazz playing softly in the background, and balcony seating offering city views, Ô Tình House is where you come to dine on rare dishes and feel like an insider.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6 pt-8 border-t border-border">
                <div>
                  <h4 className="font-serif text-xl mb-2">Atmosphere</h4>
                  <p className="text-sm text-foreground/60">Intimate, warm amber light, smooth jazz</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Price</h4>
                  <p className="text-sm text-foreground/60">200,000–400,000 VND / person</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out">
              <div className="aspect-[3/4] relative z-10 overflow-hidden">
                <img 
                  src="/images/hero-bg.png" 
                  alt="Ambiance" 
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square z-20 border-8 border-background overflow-hidden">
                <img 
                  src="/images/banh-beo.png" 
                  alt="Bánh Bèo Chén" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section id="menu" className="py-32 bg-card relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-4">Món Đặc Trưng / Signatures</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground">The Art of Hue Cuisine</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dish 1 */}
            <div className="group animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="overflow-hidden aspect-square mb-6 relative">
                <img 
                  src="/images/bun-xao.png" 
                  alt="Bún Xáo Tủy Bò" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="font-serif text-2xl mb-2">Bún Xáo Tủy Bò</h4>
              <p className="text-sm text-foreground/70 mb-3 uppercase tracking-wider text-primary">Bone Marrow Noodle Soup</p>
              <p className="text-foreground/60 font-light text-sm">
                15-hour simmered broth, braised beef with mắm ruốc, clean yet deeply flavored. A modern take on bún bò.
              </p>
            </div>

            {/* Dish 2 */}
            <div className="group animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-150 ease-out">
              <div className="overflow-hidden aspect-square mb-6 relative">
                <img 
                  src="/images/banh-beo.png" 
                  alt="Bánh Bèo Chén" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="font-serif text-2xl mb-2">Bánh Bèo Chén</h4>
              <p className="text-sm text-foreground/70 mb-3 uppercase tracking-wider text-primary">Charcoal Steamed Rice Cakes</p>
              <p className="text-foreground/60 font-light text-sm">
                A unique visual and textural charcoal twist on the classic, beloved Hue dish. Elegant and delicate.
              </p>
            </div>

            {/* Dish 3 */}
            <div className="group animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out">
              <div className="overflow-hidden aspect-square mb-6 relative">
                <img 
                  src="/images/beef-ribs.png" 
                  alt="Grilled Beef Short Ribs" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="font-serif text-2xl mb-2">Sườn Bò Nướng</h4>
              <p className="text-sm text-foreground/70 mb-3 uppercase tracking-wider text-primary">Grilled Beef Short Ribs</p>
              <p className="text-foreground/60 font-light text-sm">
                Perfectly charred on the outside, melt-in-your-mouth tender on the inside with a proprietary glaze.
              </p>
            </div>

            {/* Dish 4 */}
            <div className="group animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500 ease-out">
              <div className="overflow-hidden aspect-square mb-6 relative">
                <img 
                  src="/images/chicken-wings.png" 
                  alt="Vietnamese Chicken Wings" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="font-serif text-2xl mb-2">Cánh Gà Chiên Mắm</h4>
              <p className="text-sm text-foreground/70 mb-3 uppercase tracking-wider text-primary">Signature Chicken Wings</p>
              <p className="text-foreground/60 font-light text-sm">
                Perfectly seasoned, crispy, sticky, and aromatic. An absolute must-order for the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Menu List */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div>
              <h3 className="font-serif text-3xl mb-8 border-b border-border/50 pb-4">Other Highlights</h3>
              <ul className="space-y-8">
                <li>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-xl">Vietnamese Loco Moco</h4>
                    <span className="text-primary text-sm">280k</span>
                  </div>
                  <p className="text-foreground/60 text-sm font-light">A creative Vietnamese twist on the Hawaiian classic that surprises every guest.</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-xl">Chè Hạt Sen</h4>
                    <span className="text-primary text-sm">85k</span>
                  </div>
                  <p className="text-foreground/60 text-sm font-light">Delicate lotus seed dessert with a subtle, warming hint of cinnamon.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-3xl mb-8 border-b border-border/50 pb-4">Bar & Cellar</h3>
              <ul className="space-y-8">
                <li>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-xl">Craft Beers on Draft</h4>
                    <span className="text-primary text-sm">From 95k</span>
                  </div>
                  <p className="text-foreground/60 text-sm font-light">3 rotating taps featuring the best local craft breweries.</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-xl">Signature Cocktails</h4>
                    <span className="text-primary text-sm">From 220k</span>
                  </div>
                  <p className="text-foreground/60 text-sm font-light">First-class cocktails infused with local herbs and spices.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out">
            <p className="text-sm text-foreground/50 italic">Gluten-free options available on request. Please inform our multilingual staff of any allergies.</p>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="contact" className="py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,97.4,-2.5C98,13.2,93.2,29.1,84.4,42.5C75.6,55.9,62.8,66.8,48.5,74.5C34.2,82.2,18.4,86.6,2.2,83.5C-14.1,80.4,-28.1,69.8,-42.6,60.6C-57.1,51.4,-72.1,43.6,-80.4,30.8C-88.7,18,-90.3,0.2,-87,-16C-83.7,-32.2,-75.5,-46.8,-63.9,-58C-52.3,-69.2,-37.2,-77,-21.8,-80.6C-6.4,-84.2,9,-83.6,23.1,-80.4" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-4">Trải Nghiệm / Visit Us</h2>
              <h3 className="font-serif text-4xl md:text-5xl mb-12 text-foreground">Find Your Table</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Address</h4>
                    <p className="text-foreground/70 font-light">A36 Bis Cống Quỳnh, Phường Nguyễn Cư Trinh<br />Quận 1, TP. Hồ Chí Minh</p>
                    <p className="text-xs text-foreground/50 mt-2">Elevator available for accessibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Hours</h4>
                    <p className="text-foreground/70 font-light">Open Daily</p>
                    <p className="text-foreground/70 font-light">11:00 AM – 3:00 PM</p>
                    <p className="text-foreground/70 font-light">7:00 PM – 10:00 PM</p>
                    <p className="text-primary text-sm mt-1">(Closed 3:00 PM – 7:00 PM)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Contact</h4>
                    <p className="text-foreground/70 font-light">+84 35 558 3420</p>
                    <p className="text-foreground/70 font-light mt-1">otinhhouse@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex items-center gap-4 border-t border-border/50 pt-8">
                <div className="flex text-primary">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <div>
                  <p className="font-serif text-lg">4.9 Rating</p>
                  <p className="text-xs text-foreground/50">Google & TripAdvisor (399+ reviews)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-8 border border-border animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out">
              <h4 className="font-serif text-2xl mb-6 text-center">Make a Reservation</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Date</label>
                    <input type="date" className="w-full bg-card border border-border p-3 text-foreground focus:border-primary outline-none transition-colors" data-testid="input-res-date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Time</label>
                    <select className="w-full bg-card border border-border p-3 text-foreground focus:border-primary outline-none transition-colors" data-testid="input-res-time">
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Guests</label>
                  <select className="w-full bg-card border border-border p-3 text-foreground focus:border-primary outline-none transition-colors" data-testid="input-res-guests">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People (Call us)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Name</label>
                  <input type="text" placeholder="Your full name" className="w-full bg-card border border-border p-3 text-foreground focus:border-primary outline-none transition-colors" data-testid="input-res-name" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Contact Number</label>
                  <input type="tel" placeholder="Phone or WhatsApp" className="w-full bg-card border border-border p-3 text-foreground focus:border-primary outline-none transition-colors" data-testid="input-res-phone" />
                </div>

                <Button 
                  type="button"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-serif tracking-widest uppercase py-6 mt-4"
                  data-testid="button-submit-reservation"
                  onClick={() => alert('This is a static preview. In a real app, this would submit the reservation.')}
                >
                  Request Table
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/30 py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <Link href="/" className="flex flex-col items-center cursor-pointer" data-testid="link-footer-logo">
              <span className="font-serif text-3xl tracking-widest text-primary uppercase">Ô Tình</span>
              <span className="text-[0.65rem] tracking-[0.2em] text-foreground/50 uppercase mt-1">House</span>
            </Link>
            
            <div className="flex items-center gap-6 text-foreground/60">
              <a href="https://instagram.com/otinhouse" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2" data-testid="link-instagram">
                <Instagram size={20} />
                <span className="text-sm font-light">@otinhouse</span>
              </a>
              <a href="mailto:otinhhouse@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2" data-testid="link-email">
                <Mail size={20} />
                <span className="text-sm font-light">Email Us</span>
              </a>
            </div>
            
            <p className="text-xs text-foreground/40 font-light mt-8">
              &copy; {new Date().getFullYear()} Ô Tình House. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
