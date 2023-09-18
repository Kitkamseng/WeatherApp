import React, { useEffect, useState } from 'react';
import { View, 
        Text, 
        TextInput, 
        Button, 
        Image,
        Dimensions,
        FlatList,
        SafeAreaView,
        TouchableOpacity
} from 'react-native';
import CityTracker from '../components/CityTracker';
import HomeStyles from '../styles/HomePageStyles';
import CurrentLocation from '../components/CurrentLocation';


//Set the status value
const listTab = [
    {
        status: 'City'
    },
    {
        status: 'Location'
    },
]

const HomePage = () => {
    
    //Setting default page to Location 
    const [status, setStatus] = useState ('Location')

    //This will update the state to Location or City depending on the user
    const setStatusFilter = status => {
        setStatus(status);
    }
  
    return (      
        <SafeAreaView style={HomeStyles.mainContainer}> 
            <View style={HomeStyles.listTab}>
                {/* Mapping the tabs using mapping. */}
                {
                    listTab.map(e => (
                        <TouchableOpacity 
                            style={[HomeStyles.btnTab, status === e.status && HomeStyles.btnTabActive]}
                            onPress={() => setStatusFilter(e.status)}
                        >
                            <Text 
                                style={[HomeStyles.textTab, status === e.status && HomeStyles.textTabActive]}
                            >
                                {e.status}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            {
                status === 'City' && <CityTracker /> 
            }

            {
                status === 'Location' && <CurrentLocation /> 
            } 

        </SafeAreaView> 
    );
  };
  
  export default HomePage;