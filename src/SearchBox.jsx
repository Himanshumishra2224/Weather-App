import {useState} from 'react';
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InfoBox from './InfoBox';  


function SearchBox(){
    let [city, setCity] = useState("");

    let [weatherData, setWeatherData] = useState({
        temperature : "--",
        humidity : "--",
        pressure : "--",
        weatherType : "--",
        feelsLike : "--", 
    });


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b5018cd384cec8764a22b4bf60e83dfd";

    let getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);

            if (jsonResponse.cod !== 200) {
                alert("City not found! Please enter a valid city name.");
                return;
            }
       
        let result = {
            city : city,
            temperature : jsonResponse.main.temp,
            humidity : jsonResponse.main.humidity,
            pressure : jsonResponse.main.pressure,
            weatherType : jsonResponse.weather[0].main,
            feelsLike : jsonResponse.main.feels_like,
        };

        console.log(result);

        updateInfo(result);


    } catch(error){
        console.log("Error occurred while fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again later.");
    }
};

    let updateInfo =(Data) =>{
        setWeatherData(Data);
    };

    let handleChange = (e) =>{
        setCity(e.target.value);
    };

    let handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(city);
        setCity("");
        await getWeatherInfo(updateInfo);
    };

    return(
        <div className="Box">

        <form className="Form"  onSubmit={handleSubmit}>
            <TextField id="City" color="#33418f" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
            <Button  variant= "contained" type= "submit" endIcon={<SearchIcon />} > Search</Button>
        </form>

        <InfoBox info={weatherData} />
        </div>

    );
}

export default SearchBox;