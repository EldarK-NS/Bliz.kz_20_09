import {directiveLiteral} from '@babel/types';
import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {myPostsInProgress_customer} from '../../../../../assets/allData/myPostsData';
import {MyTheme} from '../../../../components/layout/theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CargoStatusBlock from '../../../../components/CardElements/CargoStatusBlock';
import InfoDistanceBlock from '../../../../components/CardElements/InfoDistanceBlock';
import PriceBlock from '../../../../components/CardElements/PriceBlock';
import ContactBlock from '../../../../components/CardElements/ContactBlock';

const data = myPostsInProgress_customer[2];

export default function InProgressCardScreen() {
  const handleCall = () => {
    console.log('Call!!!');
  };
  const handleMessage = () => {
    console.log('Message!!!');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.sectionWhite}>
          <Text style={styles.coloredAction}>
            В РАБОТЕ: {data.details.status.title}
          </Text>
          <Text style={styles.title}>
            {data.details.title}, {data.details.net} тн/{data.details.volume}m3
          </Text>
          <Text style={styles.destinationString}>
            {data.details.from_string}-{data.details.to_string},{' '}
            {data.details.start_date}
          </Text>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>ВОДИТЕЛЬ ГРУЗА:</Text>
        </View>
        <View style={styles.sectionWhite}>
          <View style={styles.driverBlock}>
            <View style={styles.driverLeftSide}>
              <Text style={styles.worningText}>ВЫБЕРИТЕ ВОДИТЕЛЯ</Text>
              <Text
                style={styles.smallGreyText}
                ellipsizeMode={'clip'}
                numberOfLines={4}>
                Обязательно выберите водителя для перевозки до начала погрузки
              </Text>
            </View>
            <View style={styles.driverRightSide}>
              <EntypoIcon name="chevron-right" size={15} color={MyTheme.grey} />
            </View>
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>СТАТУС ПЕРЕВОЗКИ:</Text>
        </View>
        <CargoStatusBlock />
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>ИНФОРМАЦИЯ О ГРУЗЕ:</Text>
        </View>
        <InfoDistanceBlock
          pointA_Title={'Нур-Султан'}
          pointA_Subtitle={'Казахстан, Акмолинская область'}
          pointA_date={'14 июн'}
          pointB_Title={'Алматы'}
          pointB_Subtitle={'Казахстан, Алматинская область'}
          pointB_date={'~620 км, 4 ч 20 мин в пути'}
          buttonTitle={'Подробно о грузе'}
          noLine={true}
        />
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>СТОИМОСТЬ ПЕРЕВОЗКИ:</Text>
        </View>
        <PriceBlock
          title={'200 000'}
          subtitle={'без НДС, наличными'}
          button={'отказаться от заявки'}
          buttonColor={true}
        />
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>КОНТАКТЫ:</Text>
        </View>
        <ContactBlock
          companyName={'ТОО «ОУСА Альянс»'}
          personName={'Айсулу А.Л.'}
          position={'Экспедитор'}
          phoneNumber1={'+7 702 360 70 20'}
          phoneNumber2={'+7 702 360 70 30'}
          email={'aisulu@ousa-al.kz'}
          rating={5}
          Call={handleCall}
          Message={handleMessage}
          noLine={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sectionGrey: {
    height: 55,
    width: '100%',
    backgroundColor: MyTheme.background,
  },
  label: {
    // fontFamily: 'IBM-SemiBold',
    fontSize: 13,
    lineHeight: 24,
    marginTop: 24,
    marginLeft: 15,
    color: MyTheme.grey,
    fontWeight: 'bold',
  },
  sectionWhite: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  coloredAction: {
    backgroundColor: data.details.status.bacgroundcolor,
    padding: 2,
    // fontFamily:'IBM-SemiBold',
    fontSize: 12,
    width: '50%',
    marginBottom: 15,
  },
  title: {
    // fontFamily:'IBM-SemiBold',
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.black,
  },
  destinationString: {
    // fontFamily:'IBM-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.grey,
  },
  smallGreyText: {
    // fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 17,
    color: MyTheme.grey,
    width: '75%',
  },
  driverBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverLeftSide: {
    width: '90%',
  },
  driverRightSide: {
    width: '10%',
    alignItems: 'flex-end',
  },
  worningText: {
    // fontFamily: 'IBM-Bold',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
    fontWeight: 'bold',
  },
});
