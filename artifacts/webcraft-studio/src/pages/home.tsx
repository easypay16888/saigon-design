import { useTranslation } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop, Smartphone, Globe2, Rocket, HeartHandshake, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import portRest from "@/assets/portfolio-restaurant.png";
import portFash from "@/assets/portfolio-fashion.png";
import portHotel from "@/assets/portfolio-hotel.png";
import portCafe from "@/assets/portfolio-cafe.png";
import portSpa from "@/assets/portfolio-spa.png";
import portRE from "@/assets/portfolio-realestate.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function SaigonDesignLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sdGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M5 3 L18 3 Q33 3 33 18 Q33 33 18 33 L5 33 Z"
        stroke="url(#sdGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      <text
        x="17"
        y="24"
        fontSize="14"
        fontWeight="900"
        textAnchor="middle"
        fill="url(#sdGrad)"
        fontFamily="system-ui, sans-serif"
      >
        S
      </text>
    </svg>
  );
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100dvh] w-full bg-white text-gray-900 flex flex-col font-sans overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2.5">
          <SaigonDesignLogo size={34} />
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Saigon Design
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-indigo-600 transition-colors" data-testid="nav-services">{t('nav_services')}</a>
          <a href="#portfolio" className="hover:text-indigo-600 transition-colors" data-testid="nav-portfolio">{t('nav_portfolio')}</a>
          <a href="#process" className="hover:text-indigo-600 transition-colors" data-testid="nav-process">{t('nav_process')}</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors" data-testid="nav-pricing">{t('nav_pricing')}</a>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="default" className="hidden md:flex rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-none" asChild data-testid="nav-contact-btn">
            <a href="#contact">{t('nav_contact')}</a>
          </Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000" data-testid="hero-badge">
          <Rocket className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white/90">{t('hero_subtitle')}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black max-w-4xl tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 text-white">
          {t('hero_slogan')}
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-8 py-6 text-lg border-none shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)]" asChild data-testid="hero-cta-start">
            <a href="#contact">
              {t('hero_cta1')} <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg" asChild data-testid="hero-cta-work">
            <a href="#portfolio">
              {t('hero_cta2')}
            </a>
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">{t('services_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, titleKey: 'services_item1' },
              { icon: Laptop, titleKey: 'services_item2' },
              { icon: Globe2, titleKey: 'services_item3' },
              { icon: Code, titleKey: 'services_item4' },
              { icon: HeartHandshake, titleKey: 'services_item5' },
              { icon: CheckCircle2, titleKey: 'services_item6' },
            ].map((s, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300" data-testid={`service-card-${i}`}>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t(s.titleKey as any)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US + PROCESS */}
      <section id="process" className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">{t('why_title')}</h2>
            <div className="space-y-5">
              {[1,2,3,4,5,6].map(num => (
                <div key={num} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-lg text-gray-700">{t(`why_item${num}` as any)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full p-8 md:p-12 rounded-[2rem] bg-white border border-gray-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/80 blur-[80px] rounded-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-8 relative z-10 text-gray-900">{t('process_title')}</h3>
            <div className="space-y-8 relative z-10">
              {[
                { num: "01", key: 'process_step1' },
                { num: "02", key: 'process_step2' },
                { num: "03", key: 'process_step3' },
                { num: "04", key: 'process_step4' },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6" data-testid={`process-step-${i}`}>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-purple-300">
                    {step.num}
                  </div>
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <div className="text-xl font-semibold w-1/2 text-right text-gray-800">
                    {t(step.key as any)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">{t('portfolio_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: portRest, title: 'portfolio_item1' },
              { img: portFash, title: 'portfolio_item2' },
              { img: portHotel, title: 'portfolio_item3' },
              { img: portCafe, title: 'portfolio_item4' },
              { img: portSpa, title: 'portfolio_item5' },
              { img: portRE, title: 'portfolio_item6' },
            ].map((p, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300" data-testid={`portfolio-item-${i}`}>
                <img src={p.img} alt="Portfolio item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <h3 className="text-2xl font-bold text-white">{t(p.title as any)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">{t('pricing_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t_key: 'pricing_tier1', p_key: 'pricing_tier1_price', d_key: 'pricing_tier1_desc', highlight: false },
              { t_key: 'pricing_tier2', p_key: 'pricing_tier2_price', d_key: 'pricing_tier2_desc', highlight: true },
              { t_key: 'pricing_tier3', p_key: 'pricing_tier3_price', d_key: 'pricing_tier3_desc', highlight: false },
            ].map((tier, i) => (
              <div key={i} className={`p-8 rounded-[2rem] flex flex-col border ${tier.highlight ? 'bg-gradient-to-b from-indigo-600 to-purple-700 border-indigo-500 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-200/60 text-white' : 'bg-white border-gray-200 shadow-sm text-gray-900'}`} data-testid={`pricing-tier-${i}`}>
                {tier.highlight && <div className="absolute top-0 inset-x-0 h-1 bg-white/30 rounded-t-[2rem]"></div>}
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>{t(tier.t_key as any)}</h3>
                <div className={`text-3xl font-black mb-4 ${tier.highlight ? 'text-white' : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'}`}>
                  {t(tier.p_key as any)}
                </div>
                <p className={`mb-8 flex-1 text-sm leading-relaxed ${tier.highlight ? 'text-white/80' : 'text-gray-500'}`}>{t(tier.d_key as any)}</p>
                <Button className={`w-full rounded-xl py-6 font-semibold ${tier.highlight ? 'bg-white text-indigo-700 hover:bg-white/90' : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500'}`} data-testid={`pricing-select-${i}`}>
                  {t('hero_cta1')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-100/60 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-gray-900">{t('contact_title')}</h2>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 text-left mb-12 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{t('contact_name')}</label>
                  <Input className="bg-white border-gray-300 focus-visible:ring-indigo-500 text-gray-900" data-testid="input-name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{t('contact_email')}</label>
                  <Input className="bg-white border-gray-300 focus-visible:ring-indigo-500 text-gray-900" data-testid="input-email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('contact_business')}</label>
                <Input className="bg-white border-gray-300 focus-visible:ring-indigo-500 text-gray-900" data-testid="input-business" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('contact_message')}</label>
                <Textarea className="bg-white border-gray-300 min-h-[120px] focus-visible:ring-indigo-500 text-gray-900" data-testid="input-message" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl py-6 text-lg font-bold border-none" data-testid="btn-submit">
                {t('contact_submit')}
              </Button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://zalo.me/0354740168"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-semibold border border-blue-200"
              data-testid="btn-zalo"
            >
              <MessageSquare className="w-5 h-5" />
              {t('contact_zalo')}
            </a>
            <a
              href="tel:0354740168"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-semibold border border-gray-200"
              data-testid="btn-phone"
            >
              <Phone className="w-5 h-5" />
              0354 740 168
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-200 bg-white">
        <div className="flex items-center justify-center gap-2 mb-2">
          <SaigonDesignLogo size={20} />
          <span className="font-semibold text-gray-600">Saigon Design</span>
        </div>
        <p>© {new Date().getFullYear()} Saigon Design. All rights reserved.</p>
      </footer>
    </div>
  );
}
