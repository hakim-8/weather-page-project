//Set types for the weather data props
//Types were defined exactly how they would show up in consoloe.log(CurrentWeather)
export type WeatherDataProps = {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    sys: {
        country: string;

    };
    weather:{
        main:string;
    }[];
    wind:{
        speed:number
    };
}
