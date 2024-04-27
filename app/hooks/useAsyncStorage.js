
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../translation/i18n';

export const useAsyncStorage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    useEffect(() => {
        const loadLanguagePreference = async () => {
            try {
                const savedLanguage = await AsyncStorage.getItem('lang');
                if (savedLanguage) {
                    setSelectedLanguage(savedLanguage);
                    i18n.changeLanguage(savedLanguage)
                }
            } catch (error) {
                console.error('Error loading language preference:', error);
            }
        };

        loadLanguagePreference();
    }, []);

    const setLanguage = async (language) => {
        try {
            await AsyncStorage.setItem('lang', language);
            setSelectedLanguage(language);
        } catch (error) {
            console.error('Error saving language preference:', error);
        }
    };

    return { selectedLanguage, setLanguage }
}
