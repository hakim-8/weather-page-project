//import icons and functions from other files and react-icons
import React from "react";
import { IoSearch } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import WeatherIcon from "./WeatherIcon";
import LoadingSpinner from "./LoadingSpinner";
import { useWeatherData } from "../hooks/useWeatherData";
import styles from "../styles/DisplayWeather.module.scss"

const DisplayWeather: React.FC = () => {
    //destructure values from useWeatherData for use in the UI
    const { weatherData, isLoading, searchCity, setSearchCity, handleSearch } = useWeatherData();
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    //build UI
    return (
        <div className={styles.container}>
            <div className={styles.searchArea}>
                <input
                    className={styles.searchBar}
                    type="text"
                    placeholder="Enter a city"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className={styles.searchCircle} onClick={handleSearch}>
                    <IoSearch className={styles.searchIcon} />
                </button>
            </div>

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                weatherData && (
                    <div className={styles.weatherArea}>
                        <h1 className={styles.name}>{weatherData.name}</h1>
                        <p className={styles.country}>{weatherData.sys.country}</p>
                        <div className={styles.weatherIcon}><WeatherIcon weather={weatherData.weather[0].main} /></div>
                        <h2 className = {styles.temperature}>{weatherData.main.temp.toFixed(0)}°C</h2>
                        <h3 className = {styles.weatherCondition}>{weatherData.weather[0].main}</h3>
                        <div className={styles.bottomInfoArea}>
                            <div className="humidity">
                                <div className={styles.humidityIcon}><WiHumidity /></div>
                                <p className={styles.humidText}>{weatherData.main.humidity}%<span className={styles.spHumid}>Humidity</span></p>
                            </div>
                            <div className="wind">
                                <div className={styles.humidityIcon}><FaWind /></div>
                                <p className={styles.humidText}>{weatherData.wind.speed.toFixed(2)}km/h <span className={styles.spHumid}> Wind</span></p>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default DisplayWeather;
