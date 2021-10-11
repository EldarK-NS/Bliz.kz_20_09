import * as Font from "expo-font";

export async function fontLoading() {
  try {
    await Font.loadAsync({
      "IBM-Regular": require("../assets/fonts/IBMPlexSans-Regular.ttf"),
      "IBM-Medium": require("../assets/fonts/IBMPlexSans-Medium.ttf"),
      "IBM-SemiBold": require("../assets/fonts/IBMPlexSans-SemiBold.ttf"),
      "IBM-Bold": require("../assets/fonts/IBMPlexSans-Bold.ttf"),
    });
  } catch (error) {
    console.log(error);
  }
}