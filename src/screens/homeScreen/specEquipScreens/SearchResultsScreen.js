import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SpecEquipItemInfo from '../../../components/SpecEquipment/SpecEquipItemInfo';
import {specEquipItemData} from '../../../../assets/data';

export default function SearchResultsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={specEquipItemData}
        renderItem={({item}) => (
          <SpecEquipItemInfo
            title={item.data[0].details[0].name}
            price={item.data[0].details[0].price}
            net={item.data[0].details[0].net}
            mobility={item.data[0].details[0].mobility}
            capacity={item.data[0].details[0].bucketCapacity}
            image={item.data[0].image[0]}
            address={item.data[0].details[0].address}
            companyName={item.data[0].user[0].fullName}
            rating={item.data[0].user[0].rating}
            updatedAtt={'16:40'}
            city={item.data[0].details[0].city}
          />
        )}
        keyExtractor={item => item.data[0].id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
// (item.data[0].details[0])
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// <SpecEquipItemInfo title={} price={} net={} mobility={} capacity={}address={} companyName={} rating={} updatedAtt/>} keyExtractor={}
