import { useTranslation } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languageOptions: { value: Language; label: string; flag: string }[] = [
  { value: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { value: "en", label: "English", flag: "🇬🇧" },
  { value: "ko", label: "한국어", flag: "🇰🇷" },
  { value: "ja", label: "日本語", flag: "🇯🇵" },
  { value: "zh-CN", label: "简体中文", flag: "🇨🇳" },
  { value: "zh-TW", label: "繁體中文", flag: "🇹🇼" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
      <SelectTrigger className="w-[140px] bg-transparent border-none shadow-none font-medium focus:ring-0 focus:ring-offset-0 hover:bg-white/10" data-testid="language-switcher">
        <SelectValue>
          <span className="flex items-center gap-2">
            <span>{languageOptions.find(o => o.value === language)?.flag}</span>
            <span>{languageOptions.find(o => o.value === language)?.label}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-background/95 backdrop-blur-lg border-white/20">
        {languageOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} className="cursor-pointer" data-testid={`lang-option-${opt.value}`}>
            <div className="flex items-center gap-2">
              <span>{opt.flag}</span>
              <span>{opt.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
