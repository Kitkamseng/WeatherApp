import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../WeatherApplication/styles/commonStyles';
import HomePage from './screen/HomePage';
import CLDisplayPage from './screen/CLDisplayPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ cardStyle: {backgroundColor: "#043652"} }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="CLDisplay" component={CLDisplayPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

