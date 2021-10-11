import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput} from 'react-native';
import InputBox from '../../components/messagesElements/InputBox';
import BG from '../../../assets/images/BG.png';
import {MyTheme} from '../../components/layout/theme';
export default function ChatScreen() {
  const [message, setMessage] = useState('');
  return (
    <ImageBackground style={styles.wrapper} source={BG}>
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Text style={styles.leftSideText}>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.rightideText}>
            Lorem Ipsum используют потому, что тот обеспечивает более или менее
            стандартное заполнение
          </Text>
        </View>
        <View style={styles.leftSide}>
          <Text style={styles.leftSideText}>
            Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной
            вёрстки и редакторы
          </Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.rightideText}>
            Есть много вариантов Lorem Ipsum, но большинство из них имеет не
            всегда приемлемые модификации, например,
          </Text>
        </View>
      </View>
      <InputBox style={styles.input} onChange={setMessage} value={message} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  leftSide: {
    width: '70%',
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 15,
    marginLeft: 10,
    borderRadius: 10,
  },
  leftSideText: {
    fontSize: 16,
  },
  rightSide: {
    width: '70%',
    backgroundColor: MyTheme.blue,
    alignSelf: 'flex-end',
    padding: 5,
    marginRight: 10,
    borderRadius: 10,
  },
  rightideText: {
    color: 'white',
    fontSize: 16,
  },
});
