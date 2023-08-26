import { Dimensions, StyleSheet } from "react-native";

const CLDisplayStyles = StyleSheet.create({
    CLConatiner: {
        flex: 1,
        backgroundColor: '#043652',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 5, 
    },
    CLMainTitle: {
        fontSize: 50, 
        color: 'white',
        margin: 20, 
    }, 
    mapViewStyle: {
        minWidth: 350, 
        minHeight: 300, 
        borderRadius: 10, 
        margin: 20, 
    },
    clDisplayBox: {
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10, 
        width: Dimensions.get('window').width / 1.2,
        margin: 20,
    },
    currentDate: {
        fontSize: 20, 
        margin: 5, 
        color: 'white',
    },
    dateFormat: {
        fontSize: 15, 
        margin: 5, 
        color: 'white',
    }

});

export default CLDisplayStyles; 