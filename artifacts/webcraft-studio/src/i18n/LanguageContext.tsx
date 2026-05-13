import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "./translations";

type TranslationKey = keyof typeof translations["vi"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const langToHtmlLang: Record<Language, string> = {
  vi: "vi",
  en: "en",
  ko: "ko",
  ja: "ja",
  "zh-CN": "zh-Hans",
  "zh-TW": "zh-Hant",
};

const langToTitle: Record<Language, string> = {
  vi: "Saigon Design | Thiết Kế Website Chuyên Nghiệp tại TP.HCM",
  en: "Saigon Design | Professional Web Design in Ho Chi Minh City",
  ko: "Saigon Design | 호치민 전문 웹사이트 제작",
  ja: "Saigon Design | ホーチミン市のプロフェッショナルなウェブデザイン",
  "zh-CN": "Saigon Design | 胡志明市专业网站设计",
  "zh-TW": "Saigon Design | 胡志明市專業網站設計",
};

const langToDescription: Record<Language, string> = {
  vi: "Saigon Design chuyên thiết kế website đẹp, chuẩn SEO, giao hàng nhanh từ 1–7 ngày. Liên hệ: 0354 740 168",
  en: "Saigon Design specializes in beautiful, SEO-ready websites delivered in 1–7 days. Contact: 0354 740 168",
  ko: "Saigon Design은 아름답고 SEO 최적화된 웹사이트를 1-7일 내에 제작합니다. 연락처: 0354 740 168",
  ja: "Saigon Designは美しくSEO対応のウェブサイトを1〜7日で制作します。連絡先: 0354 740 168",
  "zh-CN": "Saigon Design专注于设计美观、SEO友好的网站，1-7天交付。联系电话：0354 740 168",
  "zh-TW": "Saigon Design專注於設計美觀、SEO友好的網站，1-7天交付。聯絡電話：0354 740 168",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    document.documentElement.lang = langToHtmlLang[language];
    document.title = langToTitle[language];
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", langToDescription[language]);
    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute("content", langToDescription[language]);
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute("content", langToTitle[language]);
  }, [language]);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations["vi"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
