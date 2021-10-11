import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/authScreens/LoginScreen';
import {MyTheme} from '../components/layout/theme';
import CompanyFirst from '../screens/authScreens/CompanyFirst';
import CompanySecond from '../screens/authScreens/CompanySecond';
import PersonRegistration from '../screens/authScreens/PersonRegistartion';

const Stack = createStackNavigator();

export default function AuthNavigator() {
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
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompanyFirst"
        component={CompanyFirst}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompanySecond"
        component={CompanySecond}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonRegister"
        component={PersonRegistration}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
