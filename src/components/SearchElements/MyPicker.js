import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
  Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {MyTheme} from '../layout/theme';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

export default function MyPicker({
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
              <View>
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
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => setModalOpen(!modalOpen)}
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.closeButtonContainer}>
                      <Text style={styles.closeButton}>ВЫБРАТЬ</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <Picker
                  selectedValue={value}
                  style={{height: 50, width: '100%'}}
                  onValueChange={itemValue => {
                    const valString = data?.find(item => item.id === itemValue);
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
    width: Dimensions.get('window').width - 35,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
  },
  iosButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    // fontFamily: 'IBM-Regular',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
  },
  placeholderLabel: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    // fontFamily: 'IBM-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
  },

  placeholderLabelAndr: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    // fontFamily: 'IBM-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
    position: 'absolute',
    top: 7,
    zIndex: 1,
  },
  pic: {
    width: '100%',
    height: 30,
    marginRight: 6,
    marginTop: 9,
  },
});

// const [sportModal, setSportModal] = useState(false);
// const sports = [
//   {title: 'Football11', id: '1'},
//   {title: 'Football2', id: '2'},
//   {title: 'Football3', id: '3'},
//   {title: 'Football4', id: '4'},
//   {title: 'Football5', id: '5'},
//   {title: 'Football6', id: '6'},
//   {title: 'Football7', id: '7'},
// ];
// const [sport, setSport] = useState(sports[0].id);
// const [sportString, setSportString] = useState(sports[0].title);
