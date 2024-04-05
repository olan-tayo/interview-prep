import OneSignal from "react-onesignal";

export default async function runOneSignal() {
  await OneSignal.init({
    appId: "57560c3f-79bd-4f8d-84d9-cdc5d9fcd45a",
    allowLocalhostAsSecureOrigin: true,
  });
  OneSignal.Slidedown.promptPush();
}
