import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import SearchElementSimple from '../../../components/SearchElements/SearchElementSimple';
import {specEquipmentList} from '../../../../assets/data';

export default function CategoryListScreen() {
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={specEquipmentList}
          renderItem={({item}) => (
            <SearchElementSimple
              title={item.title}
              title={item.title}
              quantity={item.quantity}
              navPath={item.path}
            />
          )}
          keyExtractor={item => item.id}
          style={styles.list}
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
    backgroundColor: '#F0F4F8',
  },
  list: {
    backgroundColor: 'white',
  },
});
