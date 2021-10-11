import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {MyTheme} from '../layout/theme';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

export default function SmallPicker({
  modalOpen,
  setModalOpen,
  value,
  setValue,
  data,
  placeholder,
  valueString,
  setValueString,
}) {
  const pickerData = items => {
    return (
      items?.length > 0 &&
      items.map((val, idx) => (
        <Picker.Item label={val.name} value={val.id} key={val.id} />
      ))
    );
  };

  if (Platform.OS === 'ios') {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Pressable
            style={styles.visibleContainer}
            onPress={() => setModalOpen(!modalOpen)}>
            <View style={styles.iosButton}>
              <View style={styles.titleContainer}>
                <Text style={styles.placeholderLabel}>{placeholder}</Text>
                <Text style={styles.title}>{valueString}</Text>
              </View>
              <AntDesignIcon
                name="caretdown"
                size={10}
                color={MyTheme.black}
                style={{marginRight: 10}}
              />
            </View>
          </Pressable>
        </View>
        <View>
          <Modal animationType="slide" transparent={true} visible={modalOpen}>
            <View style={styles.container}>
              <View style={styles.pickerContainer}>
                <TouchableOpacity
                  onPress={() => setModalOpen(!modalOpen)}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.closeButtonContainer}>
                    <Text style={styles.closeButton}>ВЫБРАТЬ</Text>
                  </View>
                </TouchableOpacity>
                <Picker
                  selectedValue={value}
                  style={{height: 50, width: '100%'}}
                  onValueChange={itemValue => {
                    const valString = data.find(item => item.id === itemValue);
                    return setValue(itemValue), setValueString(valString.name);
                  }}>
                  {pickerData(data)}
                </Picker>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.visibleContainer}>
        <Text style={styles.placeholderLabelAndr}>{placeholder}</Text>
        <Picker
          selectedValue={value}
          style={[styles.pic]}
          // height={}
          onValueChange={itemValue => {
            const valString = data.find(item => item.id === itemValue);
            return setValue(itemValue), setValueString(valString.name);
          }}>
          {pickerData(data)}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerContainer: {
    width: Dimensions.get('window').width,
    height: '30%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 2,
    borderTopColor: MyTheme.grey,
    backgroundColor: MyTheme.background,
  },
  closeButtonContainer: {
    width: 200,
    height: 30,
    backgroundColor: MyTheme.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 10,
  },
  closeButton: {
    color: 'white',
    fontSize: 16,
  },
  visibleContainer: {
    width: 115,
    height: 45,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderColor: MyTheme.grey,
    borderWidth: 0.5,
    // marginVertical: 10
  },

  iosButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    // fontFamily: 'IBM-Regular',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
  },
  placeholderLabel: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    // fontFamily: 'IBM-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  placeholderLabelAndr: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    // fontFamily: 'IBM-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
    position: 'absolute',
    top: 2,
    zIndex: 1,
    left: 2,
  },
  pic: {
    width: '100%',
    height: 30,
    marginRight: 6,
    marginTop: 4,
  },
});
