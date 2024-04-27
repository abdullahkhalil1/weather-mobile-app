import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import weatherEN from './weather/en.json'
import weatherAR from './weather/ar.json'


i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
        en: {
            weather: weatherEN,
        },
        ar: {
            weather: weatherAR,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
})

export default i18n
