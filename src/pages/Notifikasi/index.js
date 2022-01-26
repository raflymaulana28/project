import PushNotification from "react-native-push-notification";

class Notifikasi{
  configure = () => {

      PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function (token) {
          console.log("TOKEN:", token);
        },

        // (required) Called when a remote is received or opened, or local notification is opened
        onNotification: function (notification) {
          console.log("NOTIFICATION:", notification);

          // process the notification

          // (required) Called when a remote is received or opened, or local notification is opened
          // notification.finish(PushNotificationIOS.FetchResult.NoData);
        },

        // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
        onAction: function (notification) {
          console.log("ACTION:", notification.action);
          console.log("NOTIFICATION:", notification);

          // process the action
        },

        // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
        onRegistrationError: function(err) {
          console.error(err.message, err);
        },



        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
         * (optional) default: true
         * - Specified if permissions (ios) and token (android and ios) will requested or not,
         * - if not, you must call PushNotificationsHandler.requestPermissions() later
         * - if you are not using remote notification or do not have Firebase installed, use this:
         *     requestPermissions: Platform.OS === 'ios'
         */
        requestPermissions: true,
        requestPermissions: Platform.OS === 'ios'
      });
    }

      buatChannel=(channel)=> {
        PushNotification.createChannel(
          {
            channelId: channel, // (required)
            channelName: "My channel", // (required)
            channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
          },
          (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
      }

      kirimNotifikasi= (channel,judul, pesan )=> {
        PushNotification.localNotification({
          /* Android Only Properties */
          channelId: channel, 
          title: judul,
          message: pesan,
          vibrate: true,
          vibration: 300,

        });

      }
      kirimNotifikasiJadwal=(channel,judul,pesan)=> {
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          channelId: channel,
          message: pesan, // (required)
          date: new Date(Date.now() + 10 * 1000), // in 60 secs
          title: judul,
          vibrate: true,
          vibration: 300,
        });
      }
  
}
 export const notifikasi = new Notifikasi();