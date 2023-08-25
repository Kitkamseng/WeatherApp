import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CityTrackerStyles from '../styles/CityTrackerStyles';
import CurrentLocationStyles from '../styles/CurrentLocationStyles'; 
import * as Location from 'expo-location';
import CLDisplayPage from '../screen/CLDisplayPage';


const CurrentLocation = () => {

    const apiKey = "978a102bdc119ce813158022ca7c3def";
    const navigation = useNavigation();

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [isCelsius, setIsCelsius] = useState(false); 

    const toggleTempSetting = () => {
        setIsCelsius(prevState => !prevState);
    }

    const tempConvert = location && location.main ? (isCelsius ? ((location.main.temp - 32) * 5) / 9 : location.main.temp) : null;

    const handleDisplayPage = () => {
        navigation.navigate("CLDisplay");
    }

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
                <TouchableOpacity
                    onPress={toggleTempSetting}
                >
                    <Text style={CurrentLocationStyles.mainTempDisplay}>
                       {tempConvert !== null ? tempConvert.toFixed(1) : 'Loading...'} {isCelsius ? '°C' : '°F'}
                    </Text>
                </TouchableOpacity>
                <Text style={CurrentLocationStyles.weatherDes}>
                    {location.weather[0].description}
                </Text>

                <TouchableOpacity
                    onPress={handleDisplayPage}
                    style={CurrentLocationStyles.displayInfoBox}
                >
                    <Text style={CurrentLocationStyles.displayInfoTitle}>
                        {location.name}
                    </Text>
                    <Text style={CurrentLocationStyles.displayTimeZone}>
                        Timezone: {location.timezone}
                    </Text>
                    <Text style={CurrentLocationStyles.displaySmallInfo}> 
                        {location.weather[0].description}
                        {"\n"}
                        {location.weather[0].main}
                    </Text>
                </TouchableOpacity>
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





