import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import CityTrackerStyles from '../styles/CityTrackerStyles';
import * as Location from 'expo-location';


const CityTracker = () => {

    //Storing API key from OpenWeatherMap
    const apiKey = "978a102bdc119ce813158022ca7c3def";

    const [errorMsg, setErrorMsg] = useState(null);

    const [isCelsius, setIsCelsius] = useState(false); 


    const [dataWeather, setDataWeather] = useState([{}]);
    const [cityName, setCityName] = useState("");

    //Using UseState to convert temperature
    const toggleTempSetting = () => {
        setIsCelsius(prevState => !prevState);
    }

    //Using location to calculate the temperature and do conversion
    const tempConvert = dataWeather && dataWeather.main ?  (isCelsius ? ((dataWeather.main.temp - 32) * 5) /9 : dataWeather.main.temp) : null;

    const returnWeather = (event) => {
        if(event.key == "Enter") {
            //Fetching weather data using the City Name and API Key
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
                .then(res => res.json()
                ).then(
                    data => {
                        console.log("Weather Data:", data);
                        setDataWeather(data);
                        setCityName("");
                    })
                    .catch(err => {
                        console.error("Error fetching the weather data: ", err);
                    })
        }
    }

    //Handles the search bar
    const handleSubmit = () => {
        const mockEvent = { key: 'Enter' };
        returnWeather(mockEvent); 
        console.log('Button pressed with input value: ', cityName);
    }

    useEffect(() => {
        (async() => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg("Permission Denied");
                return; 
            }

        })();
    }, []);

    return(
        <View
            style={CityTrackerStyles.homeContainer}
        >
            <View 
                style={CityTrackerStyles.displayInfo}
            >
                {typeof dataWeather.main === 'undefined' ? (
                    <Text
                        style={CityTrackerStyles.welcomeDisplay}   
                    >
                        Welcome to the Weather App! {"\n"} {"\n"}Enter a city name to get the weather
                    </Text>
                ) : (
                    <View>
                        <Text style={CityTrackerStyles.displayText}>
                            {dataWeather.name}
                        </Text>
                        <TouchableOpacity
                            onPress={toggleTempSetting}
                        >
                            <Text
                                style={CityTrackerStyles.displayText}
                            >
                                {tempConvert !== null ? tempConvert.toFixed(1): "Loading..."} {isCelsius ? '°C' : '°F'} 
                            </Text>
                        </TouchableOpacity>
                        <Text style={CityTrackerStyles.displayText}>
                            {dataWeather.weather[0].main}
                        </Text>
                    </View>

                )}
            </View>
            
            <TextInput 
                placeholder='Enter Area Name'
                style={CityTrackerStyles.textInput}
                onChangeText={text => setCityName(text)}
                value={cityName}
            />
            <Button 
                style={CityTrackerStyles.submitBtn}
                title="Submit" 
                onPress={handleSubmit} 
            />


            
        </View>
    );

}

export default CityTracker; 