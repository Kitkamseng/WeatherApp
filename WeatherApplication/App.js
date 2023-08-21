import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView 
} from 'react-native';
import styles from '../WeatherApplication/styles/commonStyles';
import HomePage from './screen/HomePage';

export default function App() {
  return (
    <SafeAreaView 
      style={styles.container}
    >
      <View>
        <HomePage />
      </View>
    </SafeAreaView>
  );
}

