import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Platform} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import RootNavigator from './src/navigation/RootNavigation';
// import AuthNavigator from './src/navigation/AuthNavigation';
import {MyTheme} from './src/components/layout/theme';
import StartPage from './src/screens/StartPage';

// import Icon from 'react-native-vector-icons/FontAwesome';
//Redux

const App = () => {
  // const [token, setToken] = useState(null);
  // console.log(token);
  // const getToken = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('blizToken');
  //     if (value !== null) {
  //       setToken(value);
  //     }
  //     return;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getToken();
  // }, []);

  // if (Platform.OS == 'ios') {
  //   StatusBar.setBarStyle('light-content', true);
  // }
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <SafeAreaView style={styles.container} backgroundColor={MyTheme.blue}>
        <StatusBar barStyle={'light-content'} /> */}
        {/* {!token ? <AuthNavigator /> : <RootNavigator />} */}
        <StartPage />
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
