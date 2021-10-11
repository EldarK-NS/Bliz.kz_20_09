import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';
import {MyTheme} from '../layout/theme';

//TODO: в AppDelegate.m и в AndroidManifest.xml вставлен ключ google_api_key( смотреть в настройках библиотеки "react-native-maps"), его нужно будет поменять для клиента, так же для клиента в google console нужно активировать API - Maps SDK for IOS и Maps SDK for Android
//
export default function MapDistanceComponent({coordinates}) {
  const [fromCoord, setFromCoord] = useState(null);
  const [toCoord, setToCoord] = useState(null);
  Geocoder.init('AIzaSyD-kk951XgVXsv3b0yqJntwbxDslSP2Oxo');
  useEffect(() => {
    Geocoder.from(coordinates.pointA_Title)
      .then(json => {
        var location = json.results[0].geometry.location;
        setFromCoord(location);
      })
      .catch(error => console.warn(error));
    Geocoder.from(coordinates.pointB_Title)
      .then(json => {
        var location = json.results[0].geometry.location;
        setToCoord(location);
      })
      .catch(error => console.warn(error));
    return () => {
      setToCoord(null);
      setFromCoord(null);
    };
  }, [coordinates]);

  if (!fromCoord || !toCoord) {
    return (
      <ActivityIndicator
        size="large"
        color={MyTheme.blue}
        style={{justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }
  return (
    <View>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: fromCoord.lat,
          longitude: fromCoord.lng,
          latitudeDelta: 15,
          longitudeDelta: 15,
        }}>
        <Marker
          coordinate={{latitude: fromCoord.lat, longitude: fromCoord.lng}}
          title={'origin'}
        />
        <Marker coordinate={{latitude: toCoord.lat, longitude: toCoord.lng}} />
        <MapViewDirections
          origin={{latitude: fromCoord.lat, longitude: fromCoord.lng}}
          destination={{latitude: toCoord.lat, longitude: toCoord.lng}}
          apikey={'AIzaSyD-kk951XgVXsv3b0yqJntwbxDslSP2Oxo'}
          strokeWidth={3}
          strokeColor="hotpink"
          mode="DRIVING"
          language="ru"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({});
