import { useSearchLocation } from "../api/weather";

export const useLocations = (searchValue) => {
    const { data: locationsData } = useSearchLocation(searchValue);
    const formattedLocationsData = locationsData?.map(location => ({ name: `${location.country}, ${location.name}`, value: location.name }))
    return formattedLocationsData;
}