import { useTranslation } from "react-i18next"
import { View, Text, I18nManager } from "react-native"
import i18n from '../../translation/i18n'
import { CloudIcon } from "../../../assets/icons/cloud"
import { useEffect, useState } from "react"
import { Dropdown } from "../core/Dropdown"
import { useAsyncStorage } from "../../hooks/useAsyncStorage"
import { classNames } from "../../utils/classNames"

export const Header = () => {
    const { t } = useTranslation('weather')
    const options = [{ name: t('arabic'), value: 'ar' }, { name: t('english'), value: 'en' }]
    const [selectedOption, setSelectedOption] = useState()
    const { selectedLanguage, setLanguage } = useAsyncStorage()
    const isArabic = selectedOption?.value === 'ar'

    useEffect(() => {
        const selectedLangOption = selectedLanguage ? options.find(option => option.value === selectedLanguage) : options[1];
        setSelectedOption(selectedLangOption);
    }, [i18n.language, selectedLanguage]);

    const handleSelectionChange = (option) => {
        setLanguage(option.value)
        i18n.changeLanguage(option.value);
    }

    return (
        <View className={classNames("text-white px-4 py-2 flex-row justify-between items-center", isArabic && 'flex-row-reverse')}>
            <View className={classNames("flex-row items-center gap-3", isArabic && 'flex-row-reverse')}>
                <CloudIcon fill="#6fa3eb" size="40" />
                <Text className="text-white font-medium tracking-wide text-lg">{t('myWeather')}</Text>
            </View>
            <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={handleSelectionChange} />
        </View>
    )
}