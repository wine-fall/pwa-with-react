import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: 'en',
    saveMissing: true,
    backend: {
      projectId: '068df5d5-79e8-453e-9553-e5a67aac60c9',
      apiKey: 'd1ce5214-b0ce-49d7-9342-01c663a078f8',
    }
  }).catch((err) => {
    console.log('got the error from i18next: ', err);
  });