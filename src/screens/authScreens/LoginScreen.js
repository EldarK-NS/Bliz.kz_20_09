import React, {useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {MyTheme} from '../../components/layout/theme';
import {login} from '../../redux/actions/auth';
import Entypo from 'react-native-vector-icons/Entypo';

export default function LoginScreen() {
  const [personLogin, setPersonLogin] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.auth);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(login(phone, password));
  };
  useEffect(() => {
    if (user.message) {
      setError(user.message);
    }
  }, [user]);
  useEffect(() => {
    if (error) {
      Alert.alert(error, [{text: 'OK', onPress: () => console.log(error)}]);
    }
    setError(null);
  }, [error]);

  const handleSwitch = () => {
    setPersonLogin(!personLogin);
  };

  const showPassword = () => {
    setHidePassword(!hidePassword);
  };

  const Registartion = () => {
    if (personLogin === false) {
      navigation.navigate('PersonRegister');
    } else {
      navigation.navigate('CompanyFirst');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Block}>
        <Text style={styles.title}>Вход</Text>
        <Text style={styles.subTitle}>Введите ваши данные для входа</Text>
        <View style={styles.switcherBlock}>
          <Pressable
            style={!personLogin ? styles.switcherWhite : styles.switcherBlue}
            onPress={handleSwitch}>
            <Text
              style={
                !personLogin ? styles.switherTextBlack : styles.switherTextWhite
              }>
              Юр. лицам
            </Text>
          </Pressable>
          <Pressable
            style={personLogin ? styles.switcherWhite : styles.switcherBlue}
            onPress={handleSwitch}>
            <Text
              style={
                personLogin ? styles.switherTextBlack : styles.switherTextWhite
              }>
              Физ. лицам
            </Text>
          </Pressable>
        </View>

        <TextInput
          placeholder="Номер телефона"
          style={styles.input}
          keyboardType={'numeric'}
          value={phone}
          onChangeText={setPhone}
          returnKeyType="done"
        />
        <View style={styles.passwordBlock}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Пароль"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
            returnKeyType="done"
          />
          <Entypo
            name="eye"
            size={24}
            color={MyTheme.black}
            onPress={showPassword}
          />
        </View>
        <Pressable style={styles.forget}>
          <Text style={styles.forgetPassword}>Забыли пароль?</Text>
        </Pressable>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Войти в аккаунт</Text>
        </TouchableOpacity>
        <View style={styles.questionBlock}>
          <Text style={styles.question}>Нет аккаунта?</Text>
          <Pressable onPress={Registartion}>
            <Text style={styles.link}> Зарегистрируйтесь</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.Block}>
        <View style={styles.line} />

        <Text style={styles.rules}>
          Авторизируясь вы автоматически соглашаетесь с
          <Text style={styles.link}>
            правилами сервиса и пользовательским соглашением сервиса
          </Text>{' '}
          Bliz.kz
        </Text>
      </View>
    </View>
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
  },
  title: {
    //   fontFamily:'IBM-Medium',
    fontSize: 29,
    lineHeight: 48,
    marginTop: 70,
    marginBottom: 5,
    color: MyTheme.black,
  },
  subTitle: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 28,
    color: MyTheme.grey,
  },
  switcherBlock: {
    marginBottom: 45,
    flexDirection: 'row',
  },
  switcherBlue: {
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyTheme.blue,
  },
  switcherWhite: {
    width: 150,
    height: 45,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: MyTheme.grey,
  },
  switherTextBlack: {
    //   fontFamily:'IBM-Regular',
    fontSize: 17,
    color: MyTheme.black,
  },
  switherTextWhite: {
    //   fontFamily:'IBM-Regular',
    fontSize: 17,
    color: 'white',
  },
  input: {
    width: 300,
    height: 45,
    padding: 10,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
  },
  passwordBlock: {
    width: 300,
    height: 45,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
  },
  passwordInput: {
    width: '90%',
    height: 45,
  },
  forget: {
    width: '75%',
    marginBottom: 25,
    alignItems: 'flex-end',
  },
  forgetText: {
    //   fontFamily:'IBM-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.black,
  },
  button: {
    width: 300,
    height: 45,
    marginBottom: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyTheme.blue,
  },
  buttonText: {
    fontSize: 16,
    //   fontFamily:'IBM-Bold',
    color: 'white',
  },
  questionBlock: {
    flexDirection: 'row',
  },
  question: {
    fontSize: 14,
    //   fontFamily:'IBM-Regular',
  },
  link: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    color: MyTheme.blue,
  },
  line: {
    width: '95%',
    height: 0.5,
    marginBottom: 15,
    backgroundColor: MyTheme.grey,
  },
  rules: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    marginBottom: 25,
    width: '90%',
    textAlign: 'center',
  },
});
