"use client";
import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { copy, type Language } from "@/lib/i18n";
let memoryLanguage: Language = "mn";
const subscribe = (callback: () => void) => {
  window.addEventListener("unio-language", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("unio-language", callback);
    window.removeEventListener("storage", callback);
  };
};
const getSnapshot = (): Language => {
  try {
    return localStorage.getItem("unio-language") === "en" ? "en" : "mn";
  } catch {
    return memoryLanguage;
  }
};
const LanguageContext = createContext({
  language: "mn" as Language,
  t: copy.mn,
  setLanguage: (_language: Language) => {
    void _language;
  },
});
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => "mn" as Language,
  );
  const setLanguage = (value: Language) => {
    memoryLanguage = value;
    try {
      localStorage.setItem("unio-language", value);
    } catch {
      /* In-memory switching still works if storage is unavailable. */
    }
    window.dispatchEvent(new Event("unio-language"));
  };
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "mn"
        ? "UNIO — Website, Booking System & Business Software"
        : "UNIO — Websites & Business Software";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      language === "mn"
        ? "Бизнесийн вэбсайт, онлайн цаг захиалгын систем, удирдлагын платформ болон тусгай программ хангамжийн хөгжүүлэлт."
        : "Websites, online booking systems, admin platforms and custom software for your business.",
    );
  }, [language]);
  return (
    <LanguageContext.Provider
      value={{ language, t: copy[language], setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => useContext(LanguageContext);
