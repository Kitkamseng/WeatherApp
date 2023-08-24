import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import CityTrackerStyles from '../styles/CityTrackerStyles';
import CurrentLocationStyles from '../styles/CurrentLocationStyles'; 
import * as Location from 'expo-location';


const CurrentLocation = () => {

    const apiKey = "978a102bdc119ce813158022ca7c3def";

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
        (async() => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg("Permission Denied");
                return; 
            }
            
            let loc = await Location.getCurrentPositionAsync();

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=${apiKey}`, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setLocation(json);
            })
            .catch((error) => {
                console.log(error);
            });

        })();
    }, []);

    if(errorMsg !== null){
        return (
            <View>
                <Text>There has been an error: {errorMsg} </Text>
            </View>
        )
    } else if (location !== null){
        return(
            
            <View style={CurrentLocationStyles.currentContainer}>
                <Text style={CurrentLocationStyles.mainDisplayName}>
                    {location.name}
                </Text>
                <Text style={CurrentLocationStyles.humidityDisplay}>
                Humidity Level : {location.main.humidity} 
                </Text>
                <Image
                    source={{
                        uri:`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`
                    }}
                    style={CurrentLocationStyles.displayIcon}
                />
                <Text style={CurrentLocationStyles.mainTempDisplay}>
                    {location.main.temp} °F
                </Text>
                <Text style={CurrentLocationStyles.weatherDes}>
                    {location.weather[0].description}
                </Text>
            </View>

        );
    } else {
        return (
            <View style={CurrentLocationStyles.currentContainer}>
                <Text style={CurrentLocationStyles.waitingDisplay}>
                    Waiting... 
                </Text>
            </View>
        )
    }

    

}

export default CurrentLocation; 





