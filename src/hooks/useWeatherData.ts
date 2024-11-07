import { useState, useEffect } from "react";
import { WeatherDataProps } from "../types/weatherTypes";
import { fetchCurrentWeather, fetchWeatherData } from "../services/weatherService";

export const useWeatherData = () => {

    //declare states for weatherdata & loading & search
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchCity, setSearchCity] = useState("");

    const handleSearch = async () => {
        //statement to check if search bar is empty to avoid unnecessary processing
        if (searchCity.trim() === "") return;
        setIsLoading(true);
        //handle any errors that may occur during data fetching
        try {
            const data = await fetchWeatherData(searchCity);
            setWeatherData(data);
        } catch (error) {
            console.error("No results found", error);
        } finally {
            //code to execute regardless of success of data fetching
            setIsLoading(false);
        }
    };

    useEffect(() => {
        //requests user's current location
        navigator.geolocation.getCurrentPosition(async (position) => {
            //destructure lats and longs from position.coords
            const { latitude, longitude } = position.coords;
            setIsLoading(true);
            try {
                const data = await fetchCurrentWeather(latitude, longitude);
                setWeatherData(data);
            } catch (error) {
                console.error("Failed to fetch location-based data", error);
            } finally {
                 //code to execute regardless of success of data fetching
                setIsLoading(false);
            }
        });
    //empty dependancy array to ensure the react effect only executes once
    }, []);
    //return the relevant states and functions
    return { weatherData, isLoading, searchCity, setSearchCity, handleSearch };
};