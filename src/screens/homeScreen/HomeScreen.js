import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SearchElementMain from '../../components/SearchElements/SearchElementMain';
import {filterItemsList} from '../../../assets/data';
import {usefulWidgets} from '../../../assets/data';
import {MyTheme} from '../../components/layout/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainPart}>
        <FlatList
          data={filterItemsList}
          renderItem={({item}) => (
            <SearchElementMain
              title={item.title}
              subtitle={item.descr}
              iconname={item.icon}
              navPath={item.path}
              mainPath={item.mainPath}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <Text style={styles.widgetsTitle}>ПОЛЕЗНЫЕ ВИДЖЕТЫ</Text>

      <View style={styles.widgets}>
        <FlatList
          data={usefulWidgets}
          renderItem={({item}) => (
            <SearchElementMain
              title={item.title}
              subtitle={item.descr}
              iconname={item.icon}
              navPath={'CargoFilter'}
              mainPath={'MainCargo'}
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
    height: '100%',
    justifyContent: 'center',
    backgroundColor: MyTheme.background,
  },
  mainPart: {
    backgroundColor: 'white',
  },
  widgetsTitle: {
    height: 45,
    // fontFamily: 'IBM-Regular',
    color: '#A2A9B2',
    fontSize: 12,
    justifyContent: 'flex-end',
    marginTop: 20,
    marginLeft: 16,
  },
  widgets: {
    backgroundColor: 'white',
  },
});
