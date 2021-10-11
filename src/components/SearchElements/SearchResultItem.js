import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {useNavigation} from '@react-navigation/core';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {MyTheme} from '../layout/theme';
import {getAllFavoritesCargoPosts} from '../../redux/actions/profileFavorites';

export default function SearchResultItem(props) {
  const {
    from,
    to,
    fromId,
    toId,
    driver,
    distance,
    net,
    volume,
    type_transport,
    start_date,
    title,
    rating,
    companyName,
    price,
    status,
    auth,
    updated_at,
    path,
    postId,
    isFavorite,
    list,
  } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  //!Get & Set Token
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  const addToFavorite = async () => {
    if (!token) {
      return Alert.alert(
        'Что бы добавить груз в избранное необходимо зарегестрироваться',
        [
          {
            text: 'Отмена',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Перейти к регистрации',
            onPress: () => console.log('OK Pressed'),
          },
        ],
      );
    }
    if (list.includes(postId)) {
      try {
        await axios(
          `https://test.money-men.kz/api/cancelPostFavourites?token=${token}&post_id=${postId}`,
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios(
          `https://test.money-men.kz/api/addPostFavourites?token=${token}&post_id=${postId}&category_id=1`,
        );
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(getAllFavoritesCargoPosts(token));
  };

  //!Replace price
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  //! Rating
  const ratingsStar = (num, max) => {
    let rating = [];
    for (let i = 1; i < max; i++) {
      let x = max - num - i;
      rating.push(x);
    }
    return rating.reverse();
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(path, {
          id: postId,
        });
      }}>
      <View style={styles.mainBlock}>
        <View style={styles.mainLeftSide}>
          <View style={styles.titleBlock}>
            {status ? (
              <FontAwesome
                name="circle"
                size={8}
                color={status ? status.bacgroundcolor : 'black'}
                style={styles.dot}
              />
            ) : null}
            <Text style={styles.title}>
              {from}{' '}
              <FontAwesome5
                name="arrow-right"
                size={12}
                color="black"
                style={styles.arrowIcon}
              />{' '}
              {to}
            </Text>
          </View>

          {status ? (
            <Text style={styles.driver}>Водитель: {driver}</Text>
          ) : (
            <Text style={styles.dist}> {distance} км</Text>
          )}

          <Text style={styles.info}>
            {net} т, {volume} m&#179;, {type_transport},{' '}
            {moment(new Date(start_date)).format('MM/DD/YYYY')}, {title}
          </Text>
        </View>
        <View style={styles.mainRightSide}>
          {status ? (
            <View style={styles.statusBlock}>
              <View
                style={{
                  backgroundColor: status.bacgroundcolor,
                  width: '100%',
                  padding: 2,
                }}>
                <Text style={styles.coloredAction}>{status.title}</Text>
              </View>
              <Text style={styles.yourPrice}>ВАША ЦЕНА</Text>

              <Text style={styles.price}>
                {numberWithSpaces(price)}
                <Text style={styles.currency}> &#8376;</Text>
              </Text>
            </View>
          ) : (
            <View style={styles.barePrice}>
              <Text style={styles.price}>
                {numberWithSpaces(price)}{' '}
                <Text style={styles.currency}> &#8376;</Text>{' '}
              </Text>
              <Text style={styles.tax}>без НДС</Text>
            </View>
          )}
          {!status && (
            <Pressable onPress={addToFavorite}>
              {isFavorite ? (
                <AntDesign
                  name="star"
                  size={22}
                  color={MyTheme.blue}
                  style={styles.iconStar}
                />
              ) : (
                <AntDesign
                  name="staro"
                  size={22}
                  color={MyTheme.grey}
                  style={styles.iconStar}
                />
              )}
            </Pressable>
          )}
        </View>
      </View>
      <View style={styles.footerBlock}>
        {status ? (
          <View style={styles.footerContainer}>
            <View style={styles.companyDate}>
              <Text style={styles.tax}>ТОО &laquo;ОУСА Альянс&raquo;</Text>
              <Text style={styles.reason}>
                изм. {moment(data.updated_at).format('LT')}
              </Text>
            </View>
            <View style={styles.cargoStatus}>
              {status.title === 'ОТКАЗ' ? (
                <View style={styles.reasonDenied}>
                  <Text style={styles.reason}>Причина отказа:</Text>
                  <Text style={styles.denied}>{status.reason}</Text>
                </View>
              ) : status.title === 'ПРИНЯТО' ? (
                <Pressable style={styles.buttonConfirm}>
                  <Text style={styles.buttonTitle}>ПОДТВЕРДИТЬ ЗАЯВКУ</Text>
                </Pressable>
              ) : null}
            </View>
          </View>
        ) : (
          <View style={styles.companyDate}>
            {auth ? (
              <View style={styles.footerLeftSide}>
                <View style={styles.stars}>
                  {ratingsStar(rating, 6).map((item, index) => {
                    return (
                      <FontAwesome
                        name="star"
                        size={17}
                        color="#43CC8E"
                        key={index}
                        style={styles.smallStar}
                      />
                    );
                  })}
                </View>
                <Text style={styles.reason}>{companyName}</Text>
              </View>
            ) : (
              <View style={styles.lock}>
                <MaterialIcons name="lock" size={14} color="#A2A9B2" />
                <Text style={[styles.reason, {marginLeft: 2, fontSize: 12}]}>
                  Контакты доступны после регистрации
                </Text>
              </View>
            )}
            <Text style={styles.reason}>
              изм. {moment(updated_at).format('LT')}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 15,
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: Dimensions.get('window').width - 30,
    // width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
  },
  mainBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  mainLeftSide: {
    // maxWidth: Dimensions.get('window').width * 0.68,
    width: '60%',
  },
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    marginLeft: 3,
    lineHeight: 20,
    color: MyTheme.black,
    // fontFamily: 'IBM-Medium',
  },
  dot: {
    alignSelf: 'flex-start',
    marginTop: 7,
    marginRight: 4,
  },
  arrowIcon: {},
  dist: {
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 10,
    marginTop: 3,
    color: MyTheme.blue,
    // fontFamily: 'IBM-Regular',
  },
  driver: {
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.black,
    marginTop: 4,
    // fontFamily: 'IBM-Medium',
  },
  info: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
    // fontFamily: 'IBM-Regular',
    color: MyTheme.black,
  },
  hiddenText: {
    fontSize: 12,
    lineHeight: 16,
    color: MyTheme.grey,
    // fontFamily: 'IBM-Regular',
  },
  mainRightSide: {
    justifyContent: 'center',
    // maxWidth: Dimensions.get('window').width * 0.28,
    width: '30%',
  },
  statusBlock: {
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    alignItems: 'center',
    marginBottom: 10,
  },
  coloredAction: {
    fontSize: 12,
    // fontFamily: 'IBM-SemiBold',
    alignSelf: 'center',
  },
  yourPrice: {
    fontSize: 10,
    // fontFamily: 'IBM-SemiBold',
    color: MyTheme.grey,
  },
  barePrice: {
    alignItems: 'flex-end',
  },
  tax: {
    fontSize: 12,
    color: MyTheme.grey,
    // fontFamily: 'IBM-Regular',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  price: {
    fontSize: 16,
    color: MyTheme.black,
    // fontFamily: 'IBM-SemiBold',
    lineHeight: 24,
    // marginHorizontal: 5,
  },
  currency: {
    fontSize: 14,
  },
  iconStar: {
    alignSelf: 'flex-end',
  },
  footerContainer: {
    flexDirection: 'column',
  },
  companyDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reason: {
    fontSize: 12,
    color: MyTheme.grey,
    // fontFamily: 'IBM-Regular',
  },
  reasonDenied: {
    backgroundColor: MyTheme.lightGrey,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: 2,
  },
  denied: {
    // fontFamily: 'IBM-Regular',
    fontSize: 14,
  },
  buttonConfirm: {
    backgroundColor: MyTheme.blue,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 10,
  },
  buttonTitle: {
    color: 'white',
  },
  footerLeftSide: {
    flexDirection: 'row',
  },
  stars: {
    flexDirection: 'row',
    marginRight: 5,
  },
  smallStar: {
    marginHorizontal: 1,
  },
  lock: {
    flexDirection: 'row',
  },
});
