import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import HomeStyle from '../styles/HomePageStyle';


const HomePage = () => {

    const apiKey = "978a102bdc119ce813158022ca7c3def";
    const [dataWeather, setDataWeather] = useState([{}]);
    const [cityName, setCityName] = useState("");


    const returnWeather = (event) => {
        if(event.key == "Enter") {
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

    const handleSubmit = () => {
        const mockEvent = { key: 'Enter' };
        returnWeather(mockEvent); 
        console.log('Button pressed with input value: ', cityName);
    }
  
    return (

        
        <View
            style={HomeStyle.homeContainer}
        >
            <View 
                style={HomeStyle.displayInfo}
            >
                {typeof dataWeather.main === 'undefined' ? (
                    <Text
                        style={HomeStyle.welcomeDisplay}   
                    >
                        Welcome to the Weather App! Enter a city name to get the weather
                    </Text>
                ) : (
                    <View>
                        <Text style={HomeStyle.displayText}>
                            {dataWeather.name}
                        </Text>
                        <Text style={HomeStyle.displayText}>
                            {Math.round(dataWeather.main.temp)} °F
                        </Text>
                        <Text style={HomeStyle.displayText}>
                            {dataWeather.weather[0].main}
                        </Text>
                    </View>

                )}
            </View>
            
            <TextInput 
                placeholder='Enter Area Name'
                style={HomeStyle.textInput}
                onChangeText={text => setCityName(text)}
                value={cityName}
            />
            <Button 
                title="Submit" 
                onPress={handleSubmit} 
            />

            <View style={HomeStyle.secondDisplay}>
                <Text style={HomeStyle.displayTitle}>
                    Last city weather
                </Text>
                <Text
                    style={HomeStyle.secondWeatherDisplay}
                >
                    temperature
                </Text>
                <Text style={HomeStyle.descBox}>
                    Description
                </Text>
            </View>


        </View>
    );
  };
  
  export default HomePage;