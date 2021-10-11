import React from 'react';
import {Pressable, StyleSheet, Image, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MyTheme} from '../../../components/layout/theme';
import ContactScreen from '../../../screens/messageScreen/ContactScreen';
import ChatScreen from '../../../screens/messageScreen/ChatScreen';
const Stack = createStackNavigator();

export default function MessagesStack() {
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
        name="Contacts"
        component={ContactScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Сообщения',
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
        name="Chat"
        component={ChatScreen}
        options={({navigation, route}) => ({
          headerTitle: () => (
            <View style={styles.header}>
              <Image source={{uri: route.params.image}} style={styles.image} />
              <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>
                {route.params.name}
              </Text>
            </View>
          ),
          headerLeft: () => (
            // console.log(route),
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
});
