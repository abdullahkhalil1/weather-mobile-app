import { useTranslation } from 'react-i18next';
import { HumidityIcon } from '../../../assets/icons/humidity';
import { SunriseIcon } from '../../../assets/icons/sunrise';
import { SunsetIcon } from '../../../assets/icons/sunset';
import { WindIcon } from '../../../assets/icons/wind';
import { Card } from '../core/Card';
import { Image, Text, View } from 'react-native';

export const WeatherCard = ({ temp, icon, description, country, city, time, sunriseTime, sunsetTime, windSpeed, humidity }) => {
    const { t } = useTranslation('weather')
    return (
        <Card
            title={`${country}, ${city}`}
            otherOptions={<Text className='text-xs text-white font-medium'>{time}</Text>}
        >
            <View className="flex justify-center items-center flex-col">
                <Image source={{ uri: 'https:' + icon }} alt="weather" className='w-40 h-40' />
                <View className="mb-3 flex-row">
                    <Text className="font-medium text-7xl text-white">
                        {temp}
                    </Text>
                    <Text className="font-medium text-white text-lg">
                        &deg;C
                    </Text>
                </View>
                <Text className="text-xl text-white">{description}</Text>
                <View className='flex-row justify-center w-full'>
                    <View className=" rounded-xl mt-4 p-3 flex-col items-center">
                        <SunriseIcon />
                        <Text className="text-white">{sunriseTime}</Text>
                    </View>
                    <View className=" rounded-xl mt-4 p-3 flex-col items-center">
                        <SunsetIcon />
                        <Text className="text-white">{sunsetTime}</Text>
                    </View>
                    <View className=" rounded-xl mt-4 p-3 flex-col items-center">
                        <WindIcon />
                        <Text className="text-white">{windSpeed} {t('km/hr')}</Text>
                    </View>
                    <View className=" rounded-xl mt-4 p-3 flex-col items-center">
                        <HumidityIcon />
                        <Text className="text-white">{humidity} %</Text>
                    </View>

                </View>
            </View>
        </Card>
    )
}