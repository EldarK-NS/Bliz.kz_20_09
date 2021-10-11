import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import {MyTheme} from '../layout/theme';
import moment from 'moment';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';

export default function InfoDistanceBlock({
  colorInfo,
  titleText,
  pointA_Title,
  pointA_Subtitle,
  start_date,
  pointB_Title,
  pointB_Subtitle,
  pointB_date,
  buttonTitle,
  noLine,
  fromId,
  toId,
}) {
  const navigation = useNavigation();
  return (
    <View
      style={
        noLine
          ? [styles.mainContainer, {borderBottomWidth: 0}]
          : styles.mainContainer
      }>
      {colorInfo ? (
        <View style={styles.headerColorContainer}>
          <Text style={styles.infoColorText}>{colorInfo}</Text>
        </View>
      ) : null}
      {titleText ? (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{titleText}</Text>
          <Text style={styles.subTitleText}>
            {pointA_Title}-{pointB_Title} {moment(start_date).format('DD MMMM')}
          </Text>
        </View>
      ) : null}
      {pointA_Title ? (
        <View style={styles.middleContainer}>
          <View style={styles.middleItem}>
            <View style={styles.icon}>
              <Text style={styles.iconText}>A</Text>
            </View>
            <View style={styles.middleItemText}>
              <Text style={styles.point}>{pointA_Title}</Text>
              <Text style={styles.pointDescr}>{pointA_Subtitle}</Text>
              <Text style={styles.date}>
                {moment(start_date).format('DD MMMM')}
              </Text>
            </View>
          </View>
          <View style={styles.verticalLine}></View>
          <View style={styles.middleItem}>
            <View style={styles.icon}>
              <Text style={styles.iconText}>B</Text>
            </View>
            <View style={styles.middleItemText}>
              <Text style={styles.point}>{pointB_Title}</Text>
              <Text style={styles.pointDescr}>{pointB_Subtitle}</Text>
              <Text style={styles.date}>{pointB_date}</Text>
            </View>
          </View>
        </View>
      ) : null}
      <Pressable
        style={styles.map}
        onPress={() =>
          navigation.navigate('CargoCardMap', {
            pointA_Title,
            pointB_Title,
          })
        }>
        <EntypoIcon
          name="map"
          size={16}
          color={MyTheme.blue}
          style={styles.mapIcon}
        />
        <Text style={styles.mapText}>Показать на карте</Text>
      </Pressable>
      {buttonTitle ? (
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width - 30,
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
  },
  headerColorContainer: {
    backgroundColor: MyTheme.blue,
    marginTop: 18,
    marginBottom: 14,
    padding: 5,
    width: 148,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoColorText: {
    color: 'white',
    fontFamily: 'IBM-SemiBold',
    fontSize: 12,
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    // fontFamily: 'IBM-SemiBold',
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.black,
  },
  subTitleText: {
    // fontFamily: 'IBM-Regular',
    fontSize: 15,
    // lineHeight: 24,
    color: MyTheme.grey,
  },
  middleContainer: {},
  middleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', //!baseline crashed ios
    marginVertical: 15,
  },
  icon: {
    marginRight: 28,
    backgroundColor: MyTheme.blue,
    borderRadius: 8,
    width: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconText: {
    color: 'white',
    // fontFamily: 'IBM-SemiBold',
    fontSize: 12,
  },
  point: {
    // fontFamily: 'IBM-Medium',
    fontSize: 17,
    lineHeight: 24,
  },
  pointDescr: {
    // fontFamily: 'IBM-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  verticalLine: {
    flexDirection: 'column',
    position: 'absolute',
    top: 38,
    left: 7,
    width: 2,
    height: 60,
    backgroundColor: MyTheme.blue,
  },
  date: {
    // fontFamily: 'IBM-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: MyTheme.black,
  },
  footerButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    width: 180,
    height: 40,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footerButtonText: {
    // fontFamily: 'IBM-Medium',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.blue,
  },
  map: {
    width: '100%',
    flexDirection: 'row',
    marginLeft: 47,
    marginBottom: 5,
  },
  mapText: {
    // fontFamily: 'IBM-Regular',
    fontSize: 16,
    lineHeight: 18,
    color: MyTheme.blue,
    marginLeft: 5,
  },
});
