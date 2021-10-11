import React from 'react';
import {Dimensions, StyleSheet, Text, View, ScrollView} from 'react-native';
import Banner from '../../../components/CardElements/Banner';
import {specEquipItemData} from '../../../../assets/data';
import {MyTheme} from '../../../components/layout/theme';
import ContactBlock from '../../../components/CardElements/ContactBlock';

export default function SpecEquipItemCard() {
  const bannerData = specEquipItemData[0].data[0].image;

  const handleCall = () => {
    console.log('Call!!!');
  };
  const handleMessage = () => {
    console.log('Message!!!');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Banner data={bannerData} />
        <View style={styles.block}>
          <Text style={styles.title}>Экскаватор-погрузчик JCB</Text>
          <Text style={styles.price}>15 000 &#8376;/в час</Text>
        </View>
        <View style={styles.block}>
          <View style={styles.row}>
            <Text style={styles.descrTitle}>Год выпуска:</Text>
            <Text style={styles.descr}>2014</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.descrTitle}>Мобильность:</Text>
            <Text style={styles.descr}>Колесный</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.descrTitle}>Вид привода:</Text>
            <Text style={styles.descr}>Механический</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.descrTitle}>Емкость ковша:</Text>
            <Text style={styles.descr}>0.5 м3</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.descrTitle}>Глубина ковша:</Text>
            <Text style={styles.descr}>100 см</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.descrTitle}>Ширина ковша:</Text>
            <Text style={styles.descr}>300 см</Text>
          </View>
        </View>
        <View style={styles.block}>
          <Text style={styles.noteTetxt}>
            Работаю только утром и днем. Звоните или пишите на WhatsApp.
          </Text>
        </View>
        <ContactBlock
          companyName={'ТОО «ОУСА Альянс»'}
          personName={'Жанболат А.С.'}
          position={'Водитель'}
          phoneNumber1={'+7 702 360 70 20'}
          phoneNumber2={'+7 727 360 70 30'}
          rating={4}
          Call={handleCall}
          Message={handleMessage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    width: Dimensions.get('window').width - 30,
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
    paddingVertical: 15,
  },
  title: {
    // fontFamily:'IBM-Medium',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
  },
  price: {
    // fontFamily:'IBM-Medium',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 5,
  },
  descrTitle: {
    // fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.grey,
    width: '50%',
  },
  descr: {
    // fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.black,
    alignSelf: 'flex-start',
    width: '50%',
  },
  noteTetxt: {
    // fontFamily: 'IBM-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.black,
  },
});
