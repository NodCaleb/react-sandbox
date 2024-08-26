import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View><Text>It's a text!</Text></View>
      <Text style={styles.highllightedText}>More text</Text>
      <Button title='Tap here' />
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
  highllightedText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'orange',
    padding: 5
  }
});
