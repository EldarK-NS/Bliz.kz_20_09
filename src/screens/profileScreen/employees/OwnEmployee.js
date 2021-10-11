import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import EmployeesListItem from '../../../components/SearchElements/EmployeesListItem';
import {employeesList} from '../../../../assets/allData/employees';
import {MyTheme} from '../../../components/layout/theme';

export default function OwnEmployee() {
  return (
    <View style={styles.container}>
      <FlatList
        data={employeesList}
        renderItem={({item}) => <EmployeesListItem data={item} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonBlock}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.whiteText}>ВЫБРАТЬ ВОДИТЕЛЯ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.blackText}>Отменить выбор</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonBlock: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: '80%',
    height: 50,
    backgroundColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 15,
  },
  whiteText: {
    // fontFamily:'IBM-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },
  cancelButton: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: MyTheme.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  blackText: {
    // fontFamily:'IBM-Medium',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.black,
  },
});
