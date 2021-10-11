import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import InArchive from '../../../../screens/profileScreen/myPosts/InArchive';
import MySuggestions from '../../../../screens/profileScreen/myPosts/MySuggestions';
import {MyTheme} from '../../../../components/layout/theme';
import InProgress from '../../../../screens/profileScreen/myPosts/InProgress/InProgress';
const TopTab = createMaterialTopTabNavigator();

export default function MyPostsStack() {
  return (
    <TopTab.Navigator
      initialRouteName="InProgress"
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
        name="InProgress"
        component={InProgress}
        options={{tabBarLabel: 'В работе'}}
      />
      <TopTab.Screen
        name="Suggestion"
        component={MySuggestions}
        options={{tabBarLabel: 'Предложения'}}
      />
      <TopTab.Screen
        name="InArchive"
        component={InArchive}
        options={{tabBarLabel: 'Архив'}}
      />
    </TopTab.Navigator>
  );
}
