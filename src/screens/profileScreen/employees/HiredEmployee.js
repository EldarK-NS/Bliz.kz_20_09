import React from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
export default function HiredEmployee() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBlock}>
        <TextInput placeholder="Введите номер телефона" style={styles.input} />
      </View>
      <Text style={styles.text}>
        Введите номер телефона зарегистрированного водителя на сервисе и
        отправьте ему заявку на перевозку.
      </Text>
      <View style={styles.centralBlock}>
        <Image
          source={require('../../../../assets/images/wheel.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Пригласите водителя</Text>
        <Text style={styles.content}>
          Если водителя нет на сервисе, отправьте ему SMS-приглашение.
          Регистрация займет 5 минут.
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>ПРИГЛАСИТЬ ВОДИТЕЛЯ</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  inputBlock: {
    width: '90%',
    height: 40,
    backgroundColor: '#F1F1F2',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 10,
  },
  input: {
    marginLeft: 25,
  },
  text: {
    width: '80%',
    textAlign: 'center',
    // fontFamily: 'IBM-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.grey,
    marginBottom: 30,
  },
  centralBlock: {
    backgroundColor: '#E3F7FF',
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 55,
    height: 55,
    marginTop: 36,
    marginBottom: 10,
  },
  title: {
    // fontFamily: 'IBM-SemiBold',
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.blue,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    textAlign: 'center',
    // fontFamily: 'IBM-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.black,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    backgroundColor: MyTheme.blue,
    height: 48,
    width: '85%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    // fontFamily: 'IBM-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
