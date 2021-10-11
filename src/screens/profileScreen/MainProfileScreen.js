import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {MyTheme} from '../../components/layout/theme';
import Feather from 'react-native-vector-icons/Feather';
import SearchElementSimple from '../../components/SearchElements/SearchElementSimple';
import {funcList} from '../../../assets/allData/profileData';

export default function MainProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileBlock}>
        <View style={styles.upSection}>
          <Image
            source={require('../../../assets/images/test-fase.png')}
            style={styles.image}
          />
          <View style={styles.names}>
            <Text style={styles.userName}>Айсулу Н.Л.</Text>
            <Text style={styles.companyName}>ТОО «Логистик Фарм»</Text>
          </View>
        </View>
        <View style={styles.downSection}>
          <View style={styles.content}>
            <View style={styles.contentText}>
              <Text style={styles.title}>Статус:</Text>
              <Text style={styles.info}>Лимитед</Text>
            </View>
            <View style={styles.contentText}>
              <Text style={styles.title}>Рейтинг:</Text>
              <Text style={styles.info}>
                <Feather name="star" size={20} color={MyTheme.blue} />
                5.0
              </Text>
            </View>
            <View style={styles.contentText}>
              <Text style={styles.title}>Ваш баланс:</Text>
              <Text style={styles.info}>15 000 &#8376;</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Пополнить счет</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.funcBlock}>
        <FlatList
          data={funcList}
          renderItem={({item}) => (
            <SearchElementSimple title={item.title} navPath={item.navPath} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: MyTheme.background,
  },
  profileBlock: {
    width: Dimensions.get('window').width - 30,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  upSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
    padding: 5,
  },
  names: {
    marginLeft: 12,
  },
  userName: {
    //   fontFamily:'IBM-SemiBold',
    fontSize: 17,
    lineHeight: 22,
    color: MyTheme.black,
  },
  companyName: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.grey,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  downSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  contentText: {
    justifyContent: 'center',
  },
  title: {
    //   fontFamily:'IBM-Regular',
    fontSize: 15,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  info: {
    //   fontFamily:'IBM-Medium',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.blue,
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: MyTheme.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 19,
  },
  buttonText: {
    // fontFamily:'IBM-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.green,
  },
  funcBlock: {
    width: '100%',
    backgroundColor: 'white',
  },
});
