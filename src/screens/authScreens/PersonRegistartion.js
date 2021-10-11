import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {MyTheme} from '../../components/layout/theme';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {personSignup} from '../../redux/actions/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default function PersonRegistration() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //!Validation
  const [error, setError] = useState(null);

  //!Registartion Data
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const isValidEmail = value => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
  };
  const handleRegistration = () => {
    if (userName.trim().length < 3 || userName.length > 25) {
      return setError('Имя должно быть не менее 3-х букв');
    } else if (!email.trim()) {
      return setError('Введите корректный электронный адрес');
    } else if (isValidEmail(email) === false) {
      return setError('Введите корректный электронный адрес');
    } else if (phoneNumber.trim().length !== 11) {
      return setError('Введите корректный номер телефона');
    } else if (password.trim() < 6) {
      return setError('Минимальная длина пароля 6 символов');
    } else if (password.trim() !== password2.trim()) {
      return setError('Пароли не совпадают!');
    }
    const data = {
      phone: phoneNumber,
      fullName: userName,
      email,
      password,
    };
    dispatch(personSignup(data));
    return Alert.alert('Поздравляем', 'Вы успешно зарегистрировались!', [
      {
        text: 'OK',
        onPress: () => console.log('success'),
        style: 'cancel',
      },
    ]);
  };

  if (error) {
    Alert.alert('Ошибка', error, [
      {
        text: 'OK',
        onPress: () => setError(null),
        style: 'cancel',
      },
    ]);
  }

  return (
    <KeyboardAwareScrollView enableOnAndroid={true}>
      <View style={styles.container}>
        <View style={styles.Block}>
          <Text style={styles.title}>Регистрация</Text>
          <Text style={styles.subTitle}>Введите ваши данные </Text>

          <Text style={styles.inputLabel}>Контакное лицо</Text>
          <TextInput
            placeholder="ФИО"
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
            autoCapitalize={'words'}
            returnKeyType="done"
          />
          <TextInput
            placeholder="Эл. адрес"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            returnKeyType="done"
          />
          <TextInput
            placeholder="Номер телефона 7 (XXX) XXX XX XX"
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            textContentType={'telephoneNumber'}
            keyboardType="numeric"
            returnKeyType="done"
          />

          <Text style={styles.inputLabel}>Пароль</Text>
          <TextInput
            placeholder="Введите пароль"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            returnKeyType="done"
          />
          <TextInput
            placeholder="Повторите пароль"
            style={styles.input}
            value={password2}
            onChangeText={setPassword2}
            returnKeyType="done"
          />

          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <Text style={styles.buttonText}>Регистрация</Text>
          </TouchableOpacity>
          <View style={styles.questionBlock}>
            <Text style={styles.question}>Зарегистрированны? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}> Войти</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.Block}>
          <View style={styles.line} />

          <Text style={styles.rules}>
            Авторизируясь вы автоматически соглашаетесь с{' '}
            <Text style={styles.link}>
              правилами сервиса и пользовательским соглашением сервиса
            </Text>{' '}
            Bliz.kz
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  Block: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    //   fontFamily:'IBM-Medium',
    fontSize: 29,
    lineHeight: 48,
    color: MyTheme.black,
    marginTop: 70,
    marginBottom: 5,
  },
  subTitle: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.grey,
    marginBottom: 28,
  },
  inputLabel: {
    width: '75%',
    //   fontFamily:'IBM-Medium',
    fontSize: 17,
    lineHeight: 25,
    color: MyTheme.black,
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 45,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: 300,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyTheme.blue,
    borderRadius: 5,
    marginBottom: 25,
    marginTop: 30,
  },
  buttonText: {
    //   fontFamily:'IBM-Bold',
    fontSize: 16,
    color: 'white',
  },
  questionBlock: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  question: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
  },
  link: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    color: MyTheme.blue,
  },
  line: {
    width: '95%',
    height: 0.5,
    backgroundColor: MyTheme.grey,
    marginBottom: 15,
  },
  rules: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    width: '90%',
    textAlign: 'center',
    marginBottom: 25,
  },
});
