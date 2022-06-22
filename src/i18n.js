import { createI18n } from 'vue-i18n/index'
import { messages } from "vite-i18n-resources";
import { environment } from "../environment";

const i18n = createI18n({
    locale: localStorage.getItem("locale") || environment.locale.default,
    fallbackLocale: environment.locale.fallback,
    messages
})

export default i18n
