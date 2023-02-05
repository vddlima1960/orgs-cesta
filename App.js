import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

<<<<<<< HEAD
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <View style={styles.container}>
      <Cesta />
=======
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
>>>>>>> e3c245b04d40b619ccb67b1a0ed1ef1882e3829c
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
