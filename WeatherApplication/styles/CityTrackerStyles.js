import { StyleSheet } from "react-native";

const CityTrackerStyles = StyleSheet.create({
        homeContainer: {
          flex: 1,
          backgroundColor: '#043652',
          alignItems: 'center',
          justifyContent: 'flex-start',

        },
        textInput: {
          backgroundColor: 'white',
          borderRadius: 10, 
          borderWidth: 1, 
          borderColor: 'gray', 
          minWidth: 300,
          padding: 10,
          marginBottom: 20, 
          textAlign: 'center',

        },  
        submitBtn: {
          borderWidth: 1,        
          borderColor: 'black',   
          padding: 10,            
          borderRadius: 5, 
          backgroundColor: 'white'
        },
        displayInfo: {
          margin: 50,
          paddingTop: 20, 
          paddingBottom: 50, 
        },  
        welcomeDisplay: {
          margin: 10, 
          paddingTop: 20, 
          textAlign: 'center',
          fontSize: 30, 
          color: 'white',
        },  
        displayText: {  
          textAlign: 'center',
          fontSize: 50, 
          margin: 10,
          padding: 10, 
          color: 'white',
        },  
        secondDisplay: {
          margin: 30, 
          borderWidth: 5,   
          borderColor: 'black', 
          borderRadius: 20, 
          minWidth: 350, 
          backgroundColor: 'white',
        },
        displayTitle: {
          margin: 5, 
          fontSize: 20,
          borderWidth: 1,   
          borderColor: 'black', 
          borderRadius: 5, 
          width: 200,
        },
        secondWeatherDisplay: {
          margin: 10, 
          textAlign: 'center',
        },
        descBox: {
          margin: 10, 
          borderWidth: 1,   
          borderColor: 'black', 
          borderRadius: 5, 
        }
      
});

export default CityTrackerStyles;