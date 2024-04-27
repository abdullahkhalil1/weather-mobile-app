import { useQuery } from 'react-query'
// import { REACT_API_KEY } from '@env'

import { http } from '../config/http'

export const weather = {
    getCurrentWeather: (location) => http.get(`forecast.json?key=e4310bd10a374b1e860202232242504&q=${location.length ? location : 'cairo'}&days=7`),
    getWeatherHistory: (location, startDate, endDate) => http.get(`history.json?key=e4310bd10a374b1e860202232242504&q=${location.length ? location : 'cairo'}&end_dt=${endDate}&dt=${startDate}`),
    searchLocation: (location) => http.get(`search.json?key=e4310bd10a374b1e860202232242504&q=${location.length ? location : 'cairo'}`)
}

export const useGetWeather = (location) =>
    useQuery(['weather/getCurrentWeather', location],
        () => weather.getCurrentWeather(location),
        { suspense: true }
    )
export const useGetWeatherHistory = (location, startDate, endDate, isPreviousForecastMode) =>
    useQuery(['weather/getWeatherHistory', location, startDate, endDate, isPreviousForecastMode],
        () => weather.getWeatherHistory(location, startDate, endDate),
        { enabled: isPreviousForecastMode }
    )
export const useSearchLocation = (location) =>
    useQuery(['weather/searchLocation', location],
        () => weather.searchLocation(location),
        { enabled: location.length > 0 }
    )
