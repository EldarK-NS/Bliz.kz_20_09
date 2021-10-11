import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Image, View} from 'react-native';
import AuthNavigator from '../navigation/AuthNavigation';
import RootNavigator from '../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MyTheme} from '../components/layout/theme';
import {useSelector, useDispatch} from 'react-redux';
import {getProfile} from '../redux/actions/auth';

//! В useEffect переделать стейт на прев стейт

export default function StartPage() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const user = useSelector(state => state.auth);
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
  }, [user]);

  useEffect(() => {
    if (token !== null) {
      setIsAuth(true);
      setLoading(false);
      dispatch(getProfile(token));
    } else {
      setIsAuth(false);
      setLoading(false);
    }
  }, [token]);
  if (loading) {
    return (
      <View style={styles.screenContainer}>
        <Image source={require('../../assets/images/BLIZ.KZ.png')} />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container} backgroundColor={MyTheme.blue}>
      <StatusBar />
      {!isAuth ? <AuthNavigator /> : <RootNavigator />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
