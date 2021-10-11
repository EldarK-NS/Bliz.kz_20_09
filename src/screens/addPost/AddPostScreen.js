import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {addPostList} from '../../../assets/data';
import {MyTheme} from '../../components/layout/theme';
import SearchElementMain from '../../components/SearchElements/SearchElementMain';

export default function AddPostScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Выберите категорию</Text>
        <Text style={styles.subTitle}>
          Выберите раздел, в котором вы хотите разместить объявление.
        </Text>
      </View>
      <View style={styles.listBlock}>
        <FlatList
          data={addPostList}
          renderItem={({item}) => (
            <SearchElementMain
              title={item.title}
              iconname={item.icon}
              navPath={item.path}
              mainPath={item.mainPath}
            />
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
    backgroundColor: MyTheme.background,
  },
  titleBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 11,
    backgroundColor: 'white',
  },
  title: {
    // fontFamily: "IBM-Medium",
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.black,
    marginBottom: 7,
  },
  subTitle: {
    // fontFamily: "IBM-Regular",
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.grey,
    width: '80%',
    textAlign: 'center',
  },
  listBlock: {
    backgroundColor: 'white',
  },
});
