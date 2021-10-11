import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {MyTheme} from '../layout/theme';

export const SimpleInput = ({label, setInputText, inputText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Краткое описание груза"
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
          returnKeyType="done"
          maxLength={40}
        />
        <EntypoIcon name="chevron-right" size={15} color={MyTheme.grey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
  },
  inputContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    // fontFamily: 'IBM-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
    marginLeft: 7,
    marginTop: 7,
    position: 'absolute',
  },
  input: {
    height: 45,
    fontSize: 17,
    // fontFamily: 'IBM-Regular',
    color: MyTheme.black,
    lineHeight: 24,
    padding: 7,
    marginTop: 9,
  },
});
