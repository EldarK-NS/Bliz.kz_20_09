import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {MyTheme} from '../layout/theme';

export default function EmployeesListItem({data}) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Image
            source={{uri: data.img}}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.text}>
            <Text
              style={
                data.checked
                  ? [styles.name, {color: MyTheme.blue}]
                  : styles.name
              }>
              {data.name}
            </Text>
            <Text style={styles.status}>{data.status}</Text>
          </View>
        </View>
        <View
          style={
            data.checked
              ? [styles.rightSide, {borderColor: MyTheme.blue}]
              : styles.rightSide
          }>
          {data.checked ? (
            <Entypo name="check" size={15} color={MyTheme.blue} />
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
  },
  leftSide: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    marginLeft: 15,
  },
  name: {
    //   fontFamily:'IBM-Medium',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
    fontWeight: '500',
  },
  status: {
    //   fontFamily:'IBM-Regular',
    fontSize: 13,
    lineHeight: 21,
    color: MyTheme.grey,
  },
  rightSide: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: MyTheme.grey,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});
