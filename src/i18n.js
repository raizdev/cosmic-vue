import { createI18n } from 'vue-i18n/index'
import { messages } from "vite-i18n-resources";
import { environment } from "../environment";
import { defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize } from '@vee-validate/i18n';

const locale = localStorage.getItem('locale') || environment.locale.default;

const i18n = createI18n({
    locale: locale,
    fallbackLocale: environment.locale.fallback,
    messages
});

import(`./Locales/frontend/${locale}.json`)
    .then((module) => {
        let messages = module.default.messages;

        configure({
            generateMessage: localize(locale,
                {
                    messages
                }),
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true
        });
    });

Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
});

export default i18n
