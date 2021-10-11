import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MyTheme} from '../layout/theme';

//FIXME: Mаленький отступ иконок в право на 2px

export default function SecondCardBlock({
  net,
  volume,
  title,
  transport_type,
  transport_sub_type,
  addition,
  docs,
  loading,
  notes,
}) {
  return (
    <View style={styles.secondBlockContainer}>
      <View style={styles.sb_Row}>
        <MaterialCommunityIcons
          name={'package-variant-closed'}
          size={24}
          color={MyTheme.blue}
          style={styles.sb_Icon}
        />
        <View style={styles.sb_Context}>
          <Text style={styles.sb_Title}>
            {net} тн/{volume}м³
          </Text>
          <Text style={styles.sb_SubTitle}>{title}</Text>
        </View>
      </View>
      <View style={styles.sb_Row}>
        <MaterialCommunityIcons
          name={'truck-outline'}
          size={24}
          color={MyTheme.blue}
          style={styles.sb_Icon}
        />
        <View style={styles.sb_Context}>
          <Text style={styles.sb_Title}>
            {transport_type},{transport_sub_type}
          </Text>
          <Text style={styles.sb_SubTitle}>Загрузка, выгрузка: {loading}</Text>
          <Text style={styles.sb_SubTitle}>Доп. условия: {addition}</Text>
          <Text style={styles.sb_SubTitle}>Документы: {docs}</Text>
        </View>
      </View>
      <View style={styles.sb_Row}>
        <MaterialCommunityIcons
          name={'file-outline'}
          size={24}
          color={MyTheme.blue}
          style={styles.sb_Icon}
        />
        <View style={styles.sb_Context}>
          <Text
            style={[styles.sb_SubTitle, {color: MyTheme.black}]}
            numberOfLines={3}
            ellipsizeMode={'tail'}>
            {notes}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  secondBlockContainer: {
    width: Dimensions.get('window').width - 30,
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
  },
  sb_Row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  sb_Icon: {
    marginRight: 23,
  },
  sb_Title: {
    // fontFamily: 'IBM-Medium',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.black,
  },
  sb_SubTitle: {
    // fontFamily: 'IBM-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: MyTheme.grey,
    width: 280,
  },
});
