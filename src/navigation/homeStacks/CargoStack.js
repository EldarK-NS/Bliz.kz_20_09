import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import CargoFilterScreen from '../../screens/homeScreen/cargoScreens/CargoFilterScreen';
import CargoResults from '../../screens/homeScreen/cargoScreens/CargoResults';
import CargoCardScreen from '../../screens/homeScreen/cargoScreens/CargoCardScreen';
import {MyTheme} from '../../components/layout/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PlaceAutocomplite from '../../screens/homeScreen/cargoScreens/PlaceAutocomplite';
import MapCargoScreen from '../../screens/homeScreen/cargoScreens/MapCargoScreen';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

export default function CargoStack() {
  const transitData = useSelector(state => state.transitData);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: MyTheme.blue,
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="CargoFilter"
        component={CargoFilterScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Поиск грузов',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft: () => (
            <Pressable
              style={styles.leftButton}
              onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.buttonText}>Назад</Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="GooglePlaces"
        component={PlaceAutocomplite}
        options={({navigation, route}) => ({
          headerTitle: 'Откуда-Куда',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft: () => (
            <Pressable
              style={styles.leftButton}
              onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.buttonText}>Назад</Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="CargoResults"
        component={CargoResults}
        options={({navigation, route}) => ({
          headerTitle: transitData.itemsQuantity + ' объявлений',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft: () => (
            <Pressable
              style={styles.leftButton}
              onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.buttonText}>Поиск</Text>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={[styles.leftButton, {marginRight: 10}]}
              onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Фильтр</Text>
              <MaterialCommunityIcons
                name="filter-variant"
                size={24}
                color="white"
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="CargoCard"
        component={CargoCardScreen}
        options={({navigation, route}) => ({
          headerTitle: '',
          headerLeft: () => (
            <Pressable
              style={styles.leftButton}
              onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.buttonText}>Назад</Text>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={[styles.leftButton, {marginRight: 10}]}
              onPress={() => navigation.goBack()}>
              <AntDesign
                name="staro"
                size={20}
                color="white"
                style={styles.icon}
              />
              <AntDesign
                name="upload"
                size={20}
                color="white"
                style={styles.icon}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="CargoCardMap"
        component={MapCargoScreen}
        options={({navigation, route}) => ({
          headerTitle: '',
          headerLeft: () => (
            <Pressable
              style={styles.leftButton}
              onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.buttonText}>Назад</Text>
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    // fontFamily: "IBM-Regular",
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
  },
  icon: {
    marginRight: 15,
  },
});
