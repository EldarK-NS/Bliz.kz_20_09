import React from 'react';
import {
  Text,
  View,
  //   TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {MyTheme} from '../layout/theme';

export default function PriceBlock({price, payment_type, button, buttonColor}) {
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (
    <View
      style={
        buttonColor
          ? [styles.container, {borderBottomWidth: 0}]
          : styles.container
      }>
      <View style={styles.row}>
        <View style={styles.leftSide}>
          <Text style={styles.iconText}>&#8376;</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.subTitle}>Стоимость:</Text>
          <Text style={styles.title}>{numberWithSpaces(price)}</Text>
          <Text style={[styles.subTitle, {marginBottom: 8}]}>
            {payment_type === 'наличный'
              ? `без НДС ${payment_type}`
              : payment_type}
          </Text>
        </View>
      </View>
      <View
        style={
          buttonColor ? [styles.button, {borderColor: 'red'}] : styles.button
        }>
        <Text
          style={
            buttonColor
              ? [styles.buttonText, {color: 'red'}]
              : styles.buttonText
          }>
          {button}
        </Text>
      </View>
      <View>
        {buttonColor ? (
          <Text style={[styles.subTitle, {textAlign: 'center'}]}>
            Внимание! Отказаться от заявки можно только пока вы не совершили
            погрузку!
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    marginVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSide: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: MyTheme.blue,
    alignItems: 'center',
  },
  iconText: {
    color: MyTheme.blue,
    fontWeight: 'bold',
  },
  rightSide: {
    marginLeft: 28,
  },
  title: {
    // fontFamily:'IBM-Medium',
    fontSize: 18,
    lineHeight: 21,
    color: MyTheme.black,
  },
  subTitle: {
    // fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.grey,
  },
  button: {
    width: '50%',
    height: 45,
    borderWidth: 1,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: MyTheme.blue,
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    // fontFamily: 'IBM-Medium',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.blue,
  },
});
