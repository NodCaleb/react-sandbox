import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pushy from 'pushy-react-native';

export default function App() {

  Pushy.listen();

  // Register the user for push notifications
  Pushy.register()
      .then(async deviceToken => {
        // Display an alert with device token
        alert('Pushy device token: ' + deviceToken);

        // Print token to developer console
        console.log('Pushy device token: ' + deviceToken);

        // Send the token to your backend server via an HTTP GET request
        //await fetch('https://your.api.hostname/register/device?token=' + deviceToken);
        // Succeeded, optionally do something to alert the user
      })
      .catch(err => {
        // Notify user of failure
        alert('Registration failed: ' + err.message);
      });

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
