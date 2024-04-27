import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import i18n from '../../translation/i18n'
import { Card } from '../core/Card';
import { forecastModes } from '../../constants/forecastMode';
import { Dropdown } from '../core/Dropdown';
import { Spinner } from '../core/Spinner';


export const ForecastCard = ({ forecastDays, forecastMode, setForecastMode, isLoading }) => {
    const { t } = useTranslation('weather');
    const forecastOptions = [{ name: t('previousDays'), value: forecastModes.PREVIOUS }, { name: t('nextDays'), value: forecastModes.FUTURE }]
    const [selectedOption, setSelectedOption] = useState()

    useEffect(() => {
        const selectedOption = forecastMode ? forecastOptions.find(option => option.value === forecastMode) : forecastOptions[1];
        setSelectedOption(selectedOption);
    }, [i18n.language]);

    const handleSelectionChange = (option) => {
        setSelectedOption(option)
        setForecastMode(option.value)
    }

    return (
        <Card
            title={t('weatherForecast')}
            transparent
            otherOptions={
                <View>
                    <Dropdown options={forecastOptions} selectedOption={selectedOption} setSelectedOption={handleSelectionChange} />
                </View>
            }
        >
            {isLoading ?
                <Spinner /> :
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
                    <View className='flex-row justify-between gap-2'>
                        {forecastDays?.map((item) => (
                            <View key={item.date} className="justify-center items-center rounded-lg p-2 bg-black/30">
                                <Text className='text-white font-medium'>{t(`${item.day.toLowerCase()}`)}</Text>
                                <Image source={{ uri: 'https:' + item.icon }} alt="weather" className='w-16 h-16' />
                                <Text className="text-textLightGray text-xs">
                                    {format(new Date(item.date), 'MM-dd')}
                                </Text>
                                <View className="flex-row">
                                    <Text className="text-textLightGray text-lg">
                                        {item.avgTemp}
                                    </Text>
                                    <Text className="text-textLightGray text-xs">
                                        &deg;C
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                }
        </Card>
    )
}