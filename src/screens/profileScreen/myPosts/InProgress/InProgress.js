import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SearchResultItem from '../../../../components/SearchElements/SearchResultItem';
import {
  myPostsInProgress_executor,
  myPostsInProgress_customer,
} from '../../../../../assets/allData/myPostsData';
import {MyTheme} from '../../../../components/layout/theme';
export default function InProgress() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Я ИСПОЛНИТЕЛЬ (6)</Text>
      <View style={styles.items}>
        <FlatList
          data={myPostsInProgress_customer}
          renderItem={({item}) => <SearchResultItem data={item} />}
          showsVerticalScrollIndicator={false}
          style={{height: '55%'}}
        />
      </View>

      <Text style={styles.title}>Я ЗАКАЗЧИК (3)</Text>

      <View style={styles.items}>
        <FlatList
          data={myPostsInProgress_executor}
          renderItem={({item}) => <SearchResultItem data={item} />}
          showsVerticalScrollIndicator={false}
          style={{height: '35%'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '100%',
    justifyContent: 'center',
    backgroundColor: MyTheme.background,
  },
  items: {
    backgroundColor: 'white',
  },
  title: {
    // fontFamily: 'IBM-SemiBold',
    fontSize: 13,
    color: MyTheme.grey,
    marginLeft: 16,
    marginTop: 10,
    width: '100%',
    height: 25,
  },
});
