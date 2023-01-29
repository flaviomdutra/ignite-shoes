import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    user_name: "Flávio",
    user_email: "flaviomdutra@outlook.com",
  });
}
