import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, Platform } from 'react-native';
import * as Notification from 'expo-notifications';
import { useEffect } from 'react';

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  }
});

export default function App() {

  useEffect(() => {

    async function configurePushNotifications() {
      const { status } = await Notification.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== 'granted') {
        const { status } = await Notification.requestPermissionsAsync();
        finalStatus = status;

        if (finalStatus !== 'granted') {
          Alert.alert('Permission required', 'Push notifications requires appropriate permissions.');
          return;
        }
      }

      const pushTokenData = await Notification.getExpoPushTokenAsync({
        projectId: '0bef9af6-91b7-48ec-8db9-e8b6ad482c21',
      });
      console.log(pushTokenData);

      if (Platform.OS === 'android') {
        Notification.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notification.AndroidImportance.DEFAULT
        });
      }
    }

    configurePushNotifications();


  }, []);

  useEffect(() => {
    const subscription = Notification.addNotificationReceivedListener((notification) => {
      console.log('Notification received');
      console.log(notification.request.content.data);
    });

    const responseSubscription = Notification.addNotificationResponseReceivedListener((response) => {
      console.log('Response received');
      console.log(response);
      console.log(response.notification.request.content.data);

    });

    return () => {
      subscription.remove();
      responseSubscription.remove();
    };

  }, []);

  function scheduleNotificationHandler() {
    Notification.scheduleNotificationAsync({
      content: {
        title: 'Local notification',
        body: 'Notification body',
        data: {
          userName: 'User'
        }
      },
      trigger: {
        seconds: 5
      }
    })
  }

  function sendPushNotificationHandler() {
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application-json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[5YiZheIa7Yd2694fRhq9cH]',
        title: 'Test',
        body: 'Sent from the device'

      })
    });
  }

  return (
    <View style={styles.container}>
      <Button title='Schedule notification' onPress={scheduleNotificationHandler} />
      <Button title='Send Push Notifications' onPress={sendPushNotificationHandler} />

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
