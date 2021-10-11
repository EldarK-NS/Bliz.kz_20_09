import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MyTheme} from '../layout/theme';

export default function InputBox({onChange, value}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TextInput
          style={{
            flex: 1,
            marginHorizontal: 10,
            height: 35,
          }}
          // multiline
          placeholder="enter text"
          value={value}
          onChangeText={onChange}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!value && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={() => console.log('message')}>
        <View style={styles.buttonContainer}>
          {!value ? (
            <MaterialCommunityIcons name="microphone" size={30} color="white" />
          ) : (
            <MaterialIcons name="send" size={30} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'flex-end',
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: MyTheme.blue,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
