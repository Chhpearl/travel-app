import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './en.json';
import translation_zh from './zh.json';

// 后面可以在这里加其他的语言
const resources = {
    en: {
        translation:translation_en
    },
    zh:{
        translation:translation_zh
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:"en",// 默认显示的语言
        interpolation:{
            escapeValue:false
        }
    });

export default i18n;