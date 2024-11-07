import axios from "axios";
import { WeatherDataProps } from "../types/weatherTypes";

//define API key and endpoint
const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

//function to fetch weatherdata using users location
export const fetchCurrentWeather = async (lat: number, lon:number):Promise<WeatherDataProps> => {
        
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    const response = await axios.get(url);
    return response.data;
}
//function to fetch weather data using weatherprops as a fromatter and using city as a parameter
export const fetchWeatherData = async (city:string): Promise<WeatherDataProps> => {
    const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`
    const searchResponse = await axios.get(url);
    return searchResponse.data;
}