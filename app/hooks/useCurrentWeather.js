import { useGetWeather } from "../api/weather";
import { format } from 'date-fns';
import { formatForecastWeatherData } from "../utils/formatForecastWeatherData";

export const useCurrentWeather = (searchValue) => {
    const { data: weatherData, isError, error, isLoading } = useGetWeather(searchValue)
    const today = format(new Date(), 'yyyy-MM-dd')

    const formateCurrentWeatherData = () => {
        if (weatherData) {
            const { wind_kph, temp_c, humidity, condition } = weatherData.current;
            const { icon, text } = condition;
            const { country, name, localtime } = weatherData.location;
            const todayForecast = weatherData.forecast.forecastday?.find(day => day.date === today)
            return {
                windSpeed: wind_kph,
                temp: temp_c,
                humidity,
                icon,
                description: text,
                country,
                city: name,
                time: format(new Date(localtime), "dd MMMM, yyyy h:mm a"),
                sunriseTime: todayForecast?.astro.sunrise,
                sunsetTime: todayForecast?.astro.sunset,
            }
        } else {
            return {}
        }
    }

    return {
        currentWeatherData: formateCurrentWeatherData(),
        forecastWeatherData: formatForecastWeatherData(weatherData),
        isError,
        error,
        isLoading
    }
}