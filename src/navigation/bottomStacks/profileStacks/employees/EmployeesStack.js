import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MyTheme} from '../../../../components/layout/theme';
import OwnEmployee from '../../../../screens/profileScreen/employees/OwnEmployee';
import HiredEmployee from '../../../../screens/profileScreen/employees/HiredEmployee';
const TopTab = createMaterialTopTabNavigator();

export default function EmployeesStack() {
  return (
    <TopTab.Navigator
      initialRouteName="OwnEmployee"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: MyTheme.blue},
        tabBarPressColor: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: 3,
          bottom: 0,
        },
      }}>
      <TopTab.Screen
        name="OwnEmployee"
        component={OwnEmployee}
        options={{tabBarLabel: 'Сотрудник 4'}}
      />
      <TopTab.Screen
        name="HiredEmployee"
        component={HiredEmployee}
        options={{tabBarLabel: 'Наемные'}}
      />
    </TopTab.Navigator>
  );
}
