import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import CityTrackerStyles from '../styles/CityTrackerStyles';
import * as Location from 'expo-location';


const CityTracker = () => {

    const apiKey = "978a102bdc119ce813158022ca7c3def";

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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

    useEffect(() => {
        (async() => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg("Permission Denied");
                return; 
            }
            
            // let loc = await Location.getCurrentPositionAsync();

            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=${apiKey}`, {
            //     method: "POST",
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then((res) => res.json())
            // .then((json) => {
            //     console.log(json);
            //     setLocation(json);
            // })
            // .catch((error) => {
            //     console.log(error);
            // });

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
                        <Text style={CityTrackerStyles.displayText}>
                            {Math.round(dataWeather.main.temp)} °F
                        </Text>
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