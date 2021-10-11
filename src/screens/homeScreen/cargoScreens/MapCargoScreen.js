import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapDistanceComponent from '../../../components/Maps/MapDistanceComponent';
import {useRoute} from '@react-navigation/core';

export default function MapCargoScreen() {
  const route = useRoute();

  const data = route.params;
  return (
    <View>
      <MapDistanceComponent coordinates={data} />
    </View>
  );
}

const styles = StyleSheet.create({});
