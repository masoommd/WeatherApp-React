import { useState } from "react";
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp() {
    let [weather, setWeather] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    });
    let updateInfo = (newInfo) => {
        setWeather(newInfo);
    };
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Masoom</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weather}/>
        </div>
    );
}