import { StyleSheet } from "react-native";

const CurrentLocationStyles = StyleSheet.create({ 

    currentContainer: {
        flex: 1,
        backgroundColor: '#043652',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    mainDisplayName: {
        color: 'white',
        fontSize: 50,
        margin: 20, 
        paddingTop: 30, 
    },
    humidityDisplay: {
        color: 'white',
    },
    displayIcon: {
        width: 100, 
        height: 100, 
        margin: 20, 
        alignSelf: 'center',
    },
    mainTempDisplay: {
        color: 'white',
        fontSize: 40, 
    },
    weatherDes: {
        color: 'white',
        fontSize: 15, 
        margin: 20,
        textTransform: 'uppercase',     
    },
    waitingDisplay: {
        fontSize: 20, 
        color: 'white',
    }




})

export default CurrentLocationStyles;