import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MyTheme} from '../layout/theme';

export default function ContactBlock({
  companyName,
  personName,
  position,
  phoneNumber1,
  phoneNumber2,
  email,
  rating,
  Message,
  Call,
  noLine,
}) {
  const ratingsStar = (num, max) => {
    let rating = [];
    for (let i = 1; i < max; i++) {
      let x = max - num - i;
      rating.push(x);
    }
    return rating.reverse();
  };

  return (
    <View
      style={
        noLine ? [styles.container, {borderBottomWidth: 0}] : styles.container
      }>
      <View style={styles.row}>
        <Feather
          name="globe"
          size={20}
          color={MyTheme.green}
          style={styles.icon}
        />
        <View style={styles.context}>
          <View style={styles.stars}>
            {ratingsStar(rating, 6).map((item, index) => {
              return (
                <FontAwesome
                  name="star"
                  size={17}
                  color={MyTheme.green}
                  key={index}
                  style={styles.smallStar}
                />
              );
            })}
          </View>
          <Text style={styles.title}>{companyName}</Text>
          <Text style={[styles.subTitle, {color: MyTheme.black}]}>
            {personName}
          </Text>
          <Text style={styles.subTitle}>{position}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Feather
          name="phone"
          size={18}
          color={MyTheme.grey}
          style={styles.icon}
        />
        <View style={styles.context}>
          <Text style={styles.title}>{phoneNumber1}</Text>
          <Text style={styles.title}>{phoneNumber2}</Text>
        </View>
      </View>
      {email ? (
        <View style={styles.row}>
          <Feather
            name="mail"
            size={18}
            color={MyTheme.grey}
            style={styles.icon}
          />
          <View style={styles.context}>
            <Text style={[styles.subTitle, {color: MyTheme.blue}]}>
              {email}
            </Text>
          </View>
        </View>
      ) : null}
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            Message();
          }}>
          <Text style={styles.buttonText}>НАПИСАТЬ</Text>
        </Pressable>
        <Pressable
          style={[styles.button, {backgroundColor: MyTheme.green}]}
          onPress={() => {
            Call();
          }}>
          <Text style={styles.buttonText}>ПОЗВОНИТЬ</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
    marginBottom: 15,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  icon: {
    marginRight: 23,
  },
  stars: {
    flexDirection: 'row',
  },
  title: {
    // fontFamily: 'IBM-Medium',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.black,
  },
  subTitle: {
    // fontFamily: 'IBM-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.grey,
  },
  button: {
    width: '45%',
    height: 45,
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    // fontFamily: 'IBM-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },
});
