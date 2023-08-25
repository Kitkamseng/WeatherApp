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
        marginTop: 50, 
        fontSize: 20, 
        color: 'white',
    },
    displayInfoBox: {
        minWidth: 300, 
        margin: 20, 
        borderWidth: 0.5, 
        borderColor: 'black', 
        backgroundColor: 'lightgrey',
        borderRadius: 20, 
    },
    displayInfoTitle: {
        fontSize: 20, 
        margin: 15, 
    },
    displayTimeZone: {
        margin: 15, 
    },
    displaySmallInfo: {
        textTransform: 'uppercase',
        margin: 15, 
    }




})

export default CurrentLocationStyles;