import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weatherly</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
            <footer style={{
                marginTop: "50px",
                fontSize: "14px",
                color: "black"
            }}>
                © 2025 Sreevatsa Kulkarni | Weatherly
            </footer>
        </div>
    );
}
