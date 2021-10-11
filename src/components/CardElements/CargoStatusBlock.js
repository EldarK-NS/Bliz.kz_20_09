import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import {MyTheme} from '../layout/theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function CargoStatusBlock({
  startDate,
  loadingAddress,
  noteLoading,
  distance,
  distanceTime,
  lat,
  lng,
  loadingTime,
  factTimeTravel,
}) {
  //   const {status} = data;
  const data = {status: 1};
  //   const data = {status: 2};
  //   const data = {status: 3};
  return (
    <View>
      {data.status === 1 ? (
        <View style={styles.mainContainer}>
          <View style={styles.firstStatus}>
            <View style={styles.icon}>
              <Text style={styles.iconTitle}>1</Text>
            </View>
            <Text style={styles.statusText}>ОЖИДАЕТ ПОГРУЗКИ</Text>
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.smallGreyText}>Дата погрузки:</Text>
            <View style={styles.time}>
              <Text style={styles.blackMiddletext}>14 июня</Text>
            </View>

            <Text style={styles.smallGreyText}>Адрес:</Text>
            <Text style={styles.smallBlackText}>
              Алматы, ул. Розыбакиева 117Асклад «ТОО Баян Сулу» №115. Как
              приедете, позвоните, чтобы открыли шлагбаум.
            </Text>
            <Pressable style={styles.firstStatusButton}>
              <Text style={styles.buttonText}>Погрузку завершил</Text>
            </Pressable>
          </View>
          <View style={styles.firstStatus}>
            <View style={[styles.icon, {borderColor: MyTheme.grey}]}>
              <Text style={styles.iconTitle}>2</Text>
            </View>
            <Text style={[styles.statusText, {color: MyTheme.grey}]}>
              ГРУЗ В ПУТИ
            </Text>
          </View>
          <View style={[styles.statusInfo, {borderLeftColor: MyTheme.grey}]}>
            <Text style={styles.smallGreyText}>
              Нажмите кнопку выше «Погрузку завершил», чтобы перейти в новый
              статус.
            </Text>
          </View>
          <View style={styles.firstStatus}>
            <View style={[styles.icon, {borderColor: MyTheme.grey}]}>
              <Text style={styles.iconTitle}>3</Text>
            </View>
            <Text style={[styles.statusText, {color: MyTheme.grey}]}>
              ГРУЗ ДОСТАВЛЕН
            </Text>
          </View>
          <View style={[styles.statusLastInfo, {borderLeftColor: 'white'}]}>
            <Text style={styles.smallGreyText}>
              Как только завершите грузоперевозку, нажмите на «Груз доставил»,
              чтобы перейти в новый статус.
            </Text>
          </View>
        </View>
      ) : data.status === 2 ? (
        <View style={styles.mainContainer}>
          <View style={styles.firstStatus}>
            <View style={styles.icon}>
              <Text style={styles.iconTitle}>1</Text>
            </View>
            <Text style={[styles.statusText, {color: MyTheme.black}]}>
              ПОГРУЗКА ЗАВЕРШЕНА
            </Text>
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.smallGreyText}>Дата погрузки:</Text>
            <View style={[styles.time, {marginBottom: 20}]}>
              <Text style={styles.blackMiddletext}>14 июня</Text>
              <Text style={styles.blackMiddletext}> в 12:30</Text>
            </View>
          </View>
          <View style={styles.firstStatus}>
            <View style={styles.icon}>
              <Text style={styles.iconTitle}>2</Text>
            </View>
            <Text style={styles.statusText}>ГРУЗ В ПУТИ</Text>
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.smallGreyText}>Осталось до конца:</Text>
            <Text style={styles.blackMiddletext}>~6 ч 45 мин, 320 км</Text>
            <Pressable style={styles.map}>
              <EntypoIcon
                name="map"
                size={15}
                color={MyTheme.blue}
                style={styles.mapIcon}
              />
              <Text style={styles.buttonText}>Отследить груз</Text>
            </Pressable>
            <View style={styles.secondStatusButton}>
              <Text style={[styles.buttonText, {color: 'white'}]}>
                Груз доставил
              </Text>
            </View>
          </View>
          <View style={styles.firstStatus}>
            <View style={[styles.icon, {borderColor: MyTheme.grey}]}>
              <Text style={styles.iconTitle}>3</Text>
            </View>
            <Text style={[styles.statusText, {color: MyTheme.grey}]}>
              ГРУЗ ДОСТАВЛЕН
            </Text>
          </View>
          <View style={[styles.statusLastInfo, {borderLeftColor: 'white'}]}>
            <Text style={styles.smallGreyText}>
              Как только завершите грузоперевозку, нажмите на «Груз доставил»,
              чтобы перейти в новый статус.
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.firstStatus}>
            <View style={[styles.icon, {borderColor: MyTheme.green}]}>
              <Text style={[styles.iconTitle, {color: MyTheme.green}]}>1</Text>
            </View>
            <Text style={[styles.statusText, {color: MyTheme.green}]}>
              ПОГРУЗКА ЗАВЕРШЕНА
            </Text>
          </View>
          <View style={[styles.statusInfo, {borderLeftColor: MyTheme.green}]}>
            <Text style={styles.smallGreyText}>Дата погрузки:</Text>
            <View style={[styles.time, {marginBottom: 20}]}>
              <Text style={styles.blackMiddletext}>14 июня</Text>
              <Text style={styles.blackMiddletext}> в 12:30</Text>
            </View>
          </View>
          <View style={styles.firstStatus}>
            <View style={[styles.icon, {borderColor: MyTheme.green}]}>
              <Text style={[styles.iconTitle, {color: MyTheme.green}]}>2</Text>
            </View>
            <Text style={[styles.statusText, {color: MyTheme.green}]}>
              ГРУЗ В ПУТИ
            </Text>
          </View>
          <View style={[styles.statusInfo, {borderLeftColor: MyTheme.green}]}>
            <Text style={styles.smallGreyText}>Время в пути :</Text>
            <Text style={styles.blackMiddletext}>9 ч 35 мин</Text>
            <Pressable style={[styles.map, {marginBottom: 10}]}>
              <EntypoIcon
                name="map"
                size={15}
                color={MyTheme.grey}
                style={styles.mapIcon}
              />
              <Text style={[styles.buttonText, {color: MyTheme.grey}]}>
                Показать маршрут
              </Text>
            </Pressable>
          </View>
          <View style={styles.firstStatus}>
            <View style={[styles.icon, {borderColor: MyTheme.green}]}>
              <Text style={[styles.iconTitle, {color: MyTheme.green}]}>3</Text>
            </View>
            <Text style={[styles.statusText, {color: MyTheme.green}]}>
              ГРУЗ ДОСТАВЛЕН
            </Text>
          </View>
          <View style={[styles.statusLastInfo, {borderLeftColor: 'white'}]}>
            <Text style={styles.smallGreyText}>
              Поздравляем! Вы доставили груз!Свяжитесь с заказчиком для
              последующих действий.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width - 30,
    borderBottomColor: MyTheme.grey,
    paddingVertical: 20,
  },
  firstStatus: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 27,
    borderWidth: 2,
    borderColor: MyTheme.blue,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconTitle: {
    color: MyTheme.blue,
    // fontFamily: 'IBM-SemiBold',
    fontWeight: 'bold',
    fontSize: 12,
  },
  statusText: {
    // fontFamily: 'IBM-Bold',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
    fontWeight: 'bold',
  },
  statusInfo: {
    borderLeftWidth: 2,
    borderLeftColor: MyTheme.blue,
    paddingLeft: 30,
    marginLeft: 9,
    marginVertical: 4,
  },
  statusLastInfo: {
    paddingLeft: 30,
    marginLeft: 9,
    marginVertical: 4,
  },
  time: {
    flexDirection: 'row',
  },
  smallGreyText: {
    marginVertical: 5,
    fontSize: 14,
    lineHeight: 21,
    color: MyTheme.grey,
    // fontFamily: 'IBM-Regular',
    width: '90%',
  },
  smallBlackText: {
    fontSize: 14,
    lineHeight: 21,
    color: MyTheme.black,
    // fontFamily: 'IBM-Regular',
  },
  blackMiddletext: {
    fontSize: 18,
    lineHeight: 21,
    color: MyTheme.black,
    // fontFamily: 'IBM-Medium',
  },
  firstStatusButton: {
    width: 280,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 30,
  },
  secondStatusButton: {
    width: 280,
    height: 40,
    borderRadius: 20,
    backgroundColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.blue,
    // fontFamily: 'IBM-Medium',
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  mapIcon: {
    marginRight: 7,
  },
});
