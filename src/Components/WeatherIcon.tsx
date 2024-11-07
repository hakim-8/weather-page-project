//import relevant icons
import React from "react";
import { FaSun, FaCloudSun, FaCloudRain, FaCloud, FaRegSnowflake } from "react-icons/fa";
import { MdFoggy } from "react-icons/md";

//declare type for weather conditions
interface WeatherIconProps {
    weather: string;
}

//function with a switch statement to handle different cases for weather condition value
const WeatherIcon: React.FC<WeatherIconProps> = ({ weather }) => {
    let icon = <FaSun />;
    let color = "#FFC436";

    switch (weather) {
        case "Rain":
            icon = <FaCloudRain />;
            color = "#102C57";
            break;
        case "Clear":
            icon = <FaSun />;
            color = "#FFC436";
            break;
        case "Clouds":
            icon = <FaCloud />;
            color = "#102C57";
            break;
        case "Mist":
            icon = <MdFoggy />;
            color = "#279EFF";
            break;
        case "Snow":
            icon = <FaRegSnowflake />;
            color = "#102C57";
            break;
        default:
            icon = <FaCloudSun />;
            color = "#7B2869";
    }

    return <span style={{ color, fontSize: 100, display: "flex", alignItems: "center", justifyContent: "center"  }}>{icon}</span>;
};

export default WeatherIcon;
