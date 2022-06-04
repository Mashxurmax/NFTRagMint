// Core
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Locales
import {
    aboutEn, aboutDe, bannerEn, bannerDe, connectEn, connectDe, faqEn, faqDe, headerEn, headerDe,
    navEn, navDe, popupMintEn, popupMintDe, socialWallEn, socialWallDe, stepsEn, stepsDe,
    videoEn, videoDe, whatExpectEn, whatExpectDe,
} from './components/locales';

const resources = {
    en: {
        translation: {
            ...aboutEn,
            ...bannerEn,
            ...connectEn,
            ...faqEn,
            ...headerEn,
            ...navEn,
            ...popupMintEn,
            ...socialWallEn,
            ...stepsEn,
            ...videoEn,
            ...whatExpectEn,
        },
    },
    de: {
        translation: {
            ...aboutDe,
            ...bannerDe,
            ...connectDe,
            ...faqDe,
            ...headerDe,
            ...navDe,
            ...popupMintDe,
            ...socialWallDe,
            ...stepsDe,
            ...videoDe,
            ...whatExpectDe,
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng:           'de',
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;
