import { View } from 'react-native';
import { useState } from 'react';
import { format, subDays } from 'date-fns';
import { useCurrentWeather } from '../../hooks/useCurrentWeather';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { ForecastCard } from '../../components/weather/ForecastCard';
import { forecastModes } from '../../constants/forecastMode';
import { handleApiErrors } from '../../utils/handleApiErrors';
import { useWeatherHistory } from '../../hooks/useWeatherHistory';
import { SearchInput } from '../../components/core/SearchInput';
import { Loader } from '../../components/core/Loader';
import { Error } from '../../components/core/Error';
import { useLocations } from '../../hooks/useLocations';

export const Weather = () => {
    const [forecastMode, setForecastMode] = useState(forecastModes.FUTURE)
    const [query, setQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState()
    const locationsData = useLocations(query)
    const { currentWeatherData, forecastWeatherData, isError, error, isLoading: isCurrentWeatherLoading } = useCurrentWeather(selectedLocation?.value || '');
    const { temp, icon, description, country, city, time, sunriseTime, sunsetTime, humidity, windSpeed } = currentWeatherData || {};
    const isPreviousForecastMode = forecastModes.PREVIOUS === forecastMode;
    const startDate = format(subDays(new Date(), 7), 'yyyy-MM-dd');
    const endDate = format(new Date(), 'yyyy-MM-dd');
    const { weatherHistoryData, isLoading: isWeatherHistoryLoading } = useWeatherHistory({ startDate, endDate, isPreviousForecastMode, query: selectedLocation?.value || '' })
    const forecastDays = isPreviousForecastMode ? weatherHistoryData?.reverse() : forecastWeatherData;

    if (isCurrentWeatherLoading) {
        return <Loader />
    }

    return (
        <>
            <SearchInput locations={locationsData} setQuery={setQuery} setSelectedLocation={setSelectedLocation} />
            {isError ? <Error errorMessage={handleApiErrors(error?.response.data.error.code)} /> :
                <View className="p-3">
                    <WeatherCard
                        temp={temp}
                        icon={icon}
                        description={description}
                        country={country}
                        city={city}
                        time={time}
                        windSpeed={windSpeed}
                        humidity={humidity}
                        sunriseTime={sunriseTime}
                        sunsetTime={sunsetTime}
                    />
                    <View className="mt-4">
                        <ForecastCard forecastDays={forecastDays} forecastMode={forecastMode} setForecastMode={setForecastMode} isLoading={isWeatherHistoryLoading} />
                    </View>
                </View>
            }
        </>

    )
}

