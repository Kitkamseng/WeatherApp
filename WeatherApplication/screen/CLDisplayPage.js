import React, { useEffect } from "react";
import CLDisplayStyles from "../styles/CLDisplayStyles";
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const CLDisplayPage = ({ route }) => {

    const { location } = route.params; 

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    useEffect(() => {
        console.log(location);
    }, []);

    if(!location) {
        return(
            <Text>
                Loading....
            </Text>
        )
    }

    return(
        <View style={CLDisplayStyles.CLConatiner}>
            <Text style={CLDisplayStyles.CLMainTitle}>
                {location.name}
            </Text>
            <MapView
                style={CLDisplayStyles.mapViewStyle}
                initialRegion={{
                    latitude: location.coord.lat, 
                    longitude: location.coord.lon, 
                    latitudeDelta: 0.0922, 
                    longitudeDelta: 0.0421, 
                }}
            >
                <Marker 
                    coordinate={{
                        latitude: location.coord.lat, 
                        longitude: location.coord.lon, 
                    }}
                    title={location.name}
                />
            </MapView>
            <View style={CLDisplayStyles.clDisplayBox}>
                <Text style={CLDisplayStyles.currentDate}>
                    Current Date: 
                </Text>
                <Text style={CLDisplayStyles.dateFormat}>
                    {formattedDate}
                </Text>
                <Text style={CLDisplayStyles.dateFormat}>
                    {location.sys.country}, {location.name}
                </Text>
                <Text style={CLDisplayStyles.dateFormat}>
                    Wind Report: 
                </Text>
                <Text style={CLDisplayStyles.dateFormat}>
                    Wind Degree: {location.wind.deg}, Wind Speed: {location.wind.speed}
                </Text>
                <Text style={CLDisplayStyles.dateFormat}>
                    Weather description: {location.weather[0].description}, 
                    {"\n"}
                    Feels like: {location.main.feels_like}
                    {"\n"}
                    But it is: {location.main.temp}
                </Text>
            </View>
        </View>
    );

}

export default CLDisplayPage; 