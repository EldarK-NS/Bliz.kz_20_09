//!in Success Screen need to remove left button "Back"

import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddCargoPostForm from '../../../screens/addPost/addCargoPost/AddCargoPostForm';
import {MyTheme} from '../../../components/layout/theme';
import PlaceAutocomplite2 from '../../../screens/addPost/addCargoPost/PlaceAutocomplite2';
import AdditionalParams from '../../../screens/addPost/addCargoPost/AdditionalParams';

const Stack = createStackNavigator();

export default function CargoPostStack() {
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
        name="AddPostForm"
        component={AddCargoPostForm}
        options={({navigation, route}) => ({
          headerTitle: 'Добавить груз',
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
          headerRight: () => (
            <Pressable
              style={[styles.leftButton, {marginRight: 10}]}
              onPress={() => console.log('add cargo post!')}>
              <AntDesign name="close" size={20} color="white" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceAutocomplite2"
        component={PlaceAutocomplite2}
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
        name="AdditionalParams"
        component={AdditionalParams}
        options={({navigation, route}) => ({
          headerTitle: 'Доп. параметры',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft: () => null,
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
