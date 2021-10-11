import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import InfoDistanceBlock from '../../../components/CardElements/InfoDistanceBlock';
import SecondCardBlock from '../../../components/CardElements/SecondCardBlock';
import PriceBlock from '../../../components/CardElements/PriceBlock';
import ContactBlock from '../../../components/CardElements/ContactBlock';
import {useRoute} from '@react-navigation/core';
import axios from 'axios';
import {MyTheme} from '../../../components/layout/theme';

export default function CargoCardScreen() {
  const [info, setInfo] = useState(null);
  const route = useRoute();
  const postId = route.params.id;
  console.log('info', info);
  const getData = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/getPostByID/${postId}`,
      );
      //! if res.data.success ===true else Alert
      setInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    return () => {
      setInfo(null);
    };
  }, []);

  const handleCall = () => {
    console.log('Call!!!');
  };
  const handleMessage = () => {
    console.log('Message!!!');
  };
  if (!info) {
    return (
      <ActivityIndicator
        size="large"
        color={MyTheme.blue}
        style={{justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }

  //FIXME: InfoDistanceBlock - область добавить, убрать страну из подзаголовка
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <InfoDistanceBlock
          titleText={info.data[0].details[0].title}
          pointA_Title={info.data[0].details[0].from_string}
          pointA_Subtitle={'Казахстан, Акмолинская область'}
          start_date={info.data[0].details[0].start_date}
          pointB_Title={info.data[0].details[0].to_string}
          pointB_Subtitle={'Казахстан, Алматинская область'}
          pointB_date={'~620 км, 4 ч 20 мин в пути'}
          fromId={info.data[0].details[0].from}
          toId={info.data[0].details[0].to}
        />
        <SecondCardBlock
          net={info.data[0].details[0].net}
          volume={info.data[0].details[0].volume}
          title={info.data[0].details[0].title}
          transport_type={info.data[0].details[0].type_transport}
          transport_sub_type={info.data[0].details[0].type_sub_transport}
          addition={
            info.data[0].additional[0].addition
              ? info.data[0].additional[0].addition.join(', ')
              : 'стандартная'
          }
          docs={
            info.data[0].additional[0].loading
              ? info.data[0].additional[0].loading.join(', ')
              : 'стандартные'
          }
          loading={
            info.data[0].additional[0].docs
              ? info.data[0].additional[0].docs.join(', ')
              : 'стандартные '
          }
          notes={
            'Погрузка груза должна выполняться аккуратно. Коробки закрепить надежно. Оплата на месте получения.'
          }
        />
        <PriceBlock
          price={info.data[0].price[0].price}
          payment_type={info.data[0].price[0].payment_type}
          button={'Сделать предложение'}
        />
        <ContactBlock
          companyName={info.data[0].user[0].companyDetails[0].companyName}
          personName={info.data[0].user[0].fullName}
          position={'Экспедитор'}
          phoneNumber1={info.data[0].user[0].phone}
          phoneNumber2={info.data[0].user[0].phone}
          email={info.data[0].user[0].email}
          rating={5}
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
    backgroundColor: 'white',
  },
});
