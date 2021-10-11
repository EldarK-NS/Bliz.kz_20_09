import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddPostScreen from '../../../screens/addPost/AddPostScreen';
import CargoPostStack from './CargoPostStack';
import {MyTheme} from '../../../components/layout/theme';

const Stack = createStackNavigator();

export default function MainAddPostStack() {
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
        name="MainAddPosts"
        component={AddPostScreen}
        options={{
          headerTitle: 'Добавить объявление ',
        }}
      />
      <Stack.Screen
        name="AddCargoPost"
        component={CargoPostStack}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="MainSpecEquipment" component={SpecEquipmentStack} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}
