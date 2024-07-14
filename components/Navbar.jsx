import React from 'react';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const { locale, locales, push } = useRouter();
    const handleLanguageChange = (e) => {
        push(router.pathname, router.asPath, { locale: e.target.value });
    }
    const { t } = useTranslation();

    return (
        <div>
            <div className="flex items-center gap-4">
                <p className="text-white">{t("loginSignup:language")}</p>
                <select
                    className={`text-slate-900  border-2 px-2 py-1 rounded-md`}
                    onChange={handleLanguageChange}
                    value={locale}
                >
                    {locales.map((loc) => (
                        <option key={loc} value={loc}>
                            {loc}
                        </option>
                    ))}
                </select>
            </div>
            <p>{t("loginSignup:language")}</p>
        </div>
    )
}
