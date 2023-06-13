import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Skia } from './Skia';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Skia loaded below!</Text>
      <Skia/>
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
