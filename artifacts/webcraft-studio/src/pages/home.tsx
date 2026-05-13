import { useTranslation } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop, Smartphone, Globe2, Rocket, Clock, HeartHandshake, CheckCircle2, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import portRest from "@/assets/portfolio-restaurant.png";
import portFash from "@/assets/portfolio-fashion.png";
import portHotel from "@/assets/portfolio-hotel.png";
import portCafe from "@/assets/portfolio-cafe.png";
import portSpa from "@/assets/portfolio-spa.png";
import portRE from "@/assets/portfolio-realestate.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100dvh] w-full bg-black text-white selection:bg-purple-500 selection:text-white flex flex-col font-sans overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          <Globe2 className="w-6 h-6 text-purple-500" />
          WebCraft
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-white transition-colors">{t('nav_services')}</a>
          <a href="#portfolio" className="hover:text-white transition-colors">{t('nav_portfolio')}</a>
          <a href="#process" className="hover:text-white transition-colors">{t('nav_process')}</a>
          <a href="#pricing" className="hover:text-white transition-colors">{t('nav_pricing')}</a>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="default" className="hidden md:flex rounded-full bg-white text-black hover:bg-white/90" asChild>
            <a href="#contact">{t('nav_contact')}</a>
          </Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Rocket className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white/90">{t('hero_subtitle')}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black max-w-4xl tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          {t('hero_slogan')}
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-6 text-lg border-none shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]" asChild data-testid="hero-cta-start">
            <a href="#contact">
              {t('hero_cta1')} <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg" asChild data-testid="hero-cta-work">
            <a href="#portfolio">
              {t('hero_cta2')}
            </a>
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t('services_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, titleKey: 'services_item1' },
              { icon: Laptop, titleKey: 'services_item2' },
              { icon: Globe2, titleKey: 'services_item3' },
              { icon: Code, titleKey: 'services_item4' },
              { icon: HeartHandshake, titleKey: 'services_item5' },
              { icon: CheckCircle2, titleKey: 'services_item6' },
            ].map((s, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white/90">{t(s.titleKey as any)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t('why_title')}</h2>
            <div className="space-y-6">
              {[1,2,3,4,5,6].map(num => (
                <div key={num} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-lg text-white/80">{t(`why_item${num}` as any)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 blur-[100px] rounded-full"></div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">{t('process_title')}</h3>
            <div className="space-y-8 relative z-10">
              {[
                { num: "01", key: 'process_step1' },
                { num: "02", key: 'process_step2' },
                { num: "03", key: 'process_step3' },
                { num: "04", key: 'process_step4' },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/40 to-white/10">
                    {step.num}
                  </div>
                  <div className="h-px flex-1 bg-white/10"></div>
                  <div className="text-xl font-medium w-1/2 text-right">
                    {t(step.key as any)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t('portfolio_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: portRest, title: 'portfolio_item1' },
              { img: portFash, title: 'portfolio_item2' },
              { img: portHotel, title: 'portfolio_item3' },
              { img: portCafe, title: 'portfolio_item4' },
              { img: portSpa, title: 'portfolio_item5' },
              { img: portRE, title: 'portfolio_item6' },
            ].map((p, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10">
                <img src={p.img} alt="Portfolio item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <h3 className="text-2xl font-bold">{t(p.title as any)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t('pricing_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t_key: 'pricing_tier1', p_key: 'pricing_tier1_price', d_key: 'pricing_tier1_desc', highlight: false },
              { t_key: 'pricing_tier2', p_key: 'pricing_tier2_price', d_key: 'pricing_tier2_desc', highlight: true },
              { t_key: 'pricing_tier3', p_key: 'pricing_tier3_price', d_key: 'pricing_tier3_desc', highlight: false },
            ].map((tier, i) => (
              <div key={i} className={`p-8 rounded-[2rem] flex flex-col ${tier.highlight ? 'bg-gradient-to-b from-blue-900/40 to-purple-900/40 border border-purple-500/50 relative transform md:-translate-y-4 shadow-2xl shadow-purple-500/10' : 'bg-black border border-white/10'}`}>
                {tier.highlight && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
                <h3 className="text-2xl font-bold mb-2">{t(tier.t_key as any)}</h3>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-4">{t(tier.p_key as any)}</div>
                <p className="text-white/60 mb-8 flex-1">{t(tier.d_key as any)}</p>
                <Button className={`w-full rounded-xl py-6 ${tier.highlight ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/20'}`} data-testid={`pricing-select-${i}`}>
                  {t('hero_cta1')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12">{t('contact_title')}</h2>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left mb-12 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">{t('contact_name')}</label>
                  <Input className="bg-black/50 border-white/10 focus-visible:ring-purple-500" data-testid="input-name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">{t('contact_email')}</label>
                  <Input className="bg-black/50 border-white/10 focus-visible:ring-purple-500" data-testid="input-email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">{t('contact_business')}</label>
                <Input className="bg-black/50 border-white/10 focus-visible:ring-purple-500" data-testid="input-business" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">{t('contact_message')}</label>
                <Textarea className="bg-black/50 border-white/10 min-h-[120px] focus-visible:ring-purple-500" data-testid="input-message" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl py-6 text-lg font-bold" data-testid="btn-submit">
                {t('contact_submit')}
              </Button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-medium border border-[#25D366]/20" data-testid="btn-whatsapp">
              <MessageSquare className="w-5 h-5" />
              {t('contact_whatsapp')}
            </a>
            <a href="mailto:contact@webcraftstudio.com" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors font-medium border border-white/10">
              contact@webcraftstudio.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10 bg-black">
        <p>© {new Date().getFullYear()} WebCraft Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
