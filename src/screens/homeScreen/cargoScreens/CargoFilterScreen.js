import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import {MyTheme} from '../../../components/layout/theme';
import InputDouble from '../../../components/SearchElements/InputDouble';
import MyPicker from '../../../components/SearchElements/MyPicker';
import MyDatePicker from '../../../components/SearchElements/MyDatePicker';
import {getTransportTypes} from '../../../redux/actions/additionalData';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {removeDataForCargoPost} from '../../../redux/actions/transitStore';

//TODO: нужно ли очищать поля после возврата назад из результатов поиска

export default function CargoFilterScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const transitData = useSelector(state => state.transitData);

  //!Set Destination++++
  const [fromString, setFromString] = useState(null);
  const [destinString, setDestinString] = useState(null);
  const [fromCoord, setFromCoord] = useState(null);
  const [destinCoord, setDestinCoord] = useState(null);

  useEffect(() => {
    if (transitData.startPlaceCargo !== null) {
      setFromCoord(transitData.startPlaceCargo.id);
      setFromString(transitData.startPlaceCargo.string);
      setDestinCoord(transitData.endPlaceCargo.id);
      setDestinString(transitData.endPlaceCargo.string);
    }
  }, [transitData.endPlaceCargo]);
  //?---------------------------------------//

  //! Set Loading Date+++
  const [isLoadingDateVisible, setIsLoadingDateVisibility] = useState(false);
  const [loadingDate, setLoadingDate] = useState(null);
  const [loadingDatePlaceholder, setLoadingDatePlaceholder] =
    useState('Выберите дату');
  //! Set Unloading Date+++
  const [isUnloadingDateVisible, setIsUnloadingDateVisibility] =
    useState(false);
  const [unloadingDate, setUnloadingDate] = useState(null);
  const [unloadingDatePlaceholder, setUnloadingDatePlaceholder] =
    useState('Выберите дату');
  //?---------------------------------------//

  //!Transport+++
  const [transportModal, setTransportModal] = useState(false);
  const [transportId, setTransportId] = useState(null);
  const [transportString, setTransportString] = useState('Любой');

  //?---------------------------------------//

  //!Quantity+++
  const [quantityStart, setQuantityStart] = useState(null);
  const [quantityEnd, setQuantityEnd] = useState(null);
  //?---------------------------------------//

  //!Price+++
  const [priceStart, setPriceStart] = useState(null);
  const [priceEnd, setPriceEnd] = useState(null);

  //?---------------------------------------//

  //! Net and Volume+++
  const [netStart, setNetStart] = useState(null);
  const [netEnd, setNetEnd] = useState(null);
  const [volumeStart, setVolumeStart] = useState(null);
  const [volumeEnd, setVolumeEnd] = useState(null);

  //?---------------------------------------//

  //! set Height, Width, Length+++

  const [widthStart, setWidthStart] = useState(null);
  const [widthtEnd, setWidthEnd] = useState(null);

  const [lengthStart, setLengthStart] = useState(null);
  const [lengthEnd, setLengthEnd] = useState(null);

  const [heightStart, setHeightStart] = useState(null);
  const [heightEnd, setHeightEnd] = useState(null);

  //?---------------------------------------//

  const additionalData = useSelector(state => state.additionalData);
  useEffect(() => {
    dispatch(getTransportTypes());
  }, []);

  const getSearchResults = () => {
    const data = {
      from: fromCoord,
      volume_start: volumeStart,
      volume_end: volumeEnd,
      net_start: netStart,
      net_end: netEnd,
      start: loadingDate,
      end: unloadingDate,
      quantity_start: quantityStart,
      quantity_end: quantityEnd,
      width_start: widthStart,
      width_end: widthtEnd,
      length_start: lengthStart,
      length_end: lengthEnd,
      height_start: heightStart,
      height_end: heightEnd,
      type_transport: transportId,
      to: destinCoord,
      // priceStart,
      // priceEnd,
    };
    dispatch(removeDataForCargoPost());
    navigation.navigate('CargoResults', {data});
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Направление:</Text>
        </View>
        <Pressable
          style={styles.formBlock}
          onPress={() => navigation.navigate('GooglePlaces')}>
          <View style={styles.visibleContainer}>
            <View>
              <Text style={styles.placeholderLabel}>Откуда</Text>
              <Text style={styles.placeText}>{fromString}</Text>
            </View>
            <AntDesignIcon
              name="caretdown"
              size={10}
              color={MyTheme.black}
              style={{marginRight: 10}}
            />
          </View>
          <View style={styles.visibleContainer}>
            <View>
              <Text style={styles.placeholderLabel}>Куда</Text>
              <Text style={styles.placeText}>{destinString}</Text>
            </View>
            <AntDesignIcon
              name="caretdown"
              size={10}
              color={MyTheme.black}
              style={{marginRight: 10}}
            />
          </View>
        </Pressable>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Дата:</Text>
        </View>
        <View style={styles.formBlock}>
          <View>
            <MyDatePicker
              visibility={isLoadingDateVisible}
              setVisible={setIsLoadingDateVisibility}
              setDate={setLoadingDate}
              setTitle={setLoadingDatePlaceholder}
              placeholder={loadingDatePlaceholder}
              title={'Дата погрузки'}
            />
          </View>
          <View>
            <MyDatePicker
              visibility={isUnloadingDateVisible}
              setVisible={setIsUnloadingDateVisibility}
              setDate={setUnloadingDate}
              setTitle={setUnloadingDatePlaceholder}
              placeholder={unloadingDatePlaceholder}
              title={'Дата выгрузки'}
            />
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Транспорт, Количество, Цена:</Text>
        </View>

        <View style={styles.formBlock}>
          <MyPicker
            modalOpen={transportModal}
            setModalOpen={setTransportModal}
            value={transportId}
            setValue={setTransportId}
            data={[...additionalData.transportTypes, {id: null, name: 'Любой'}]}
            valueString={transportString}
            setValueString={setTransportString}
            placeholder="Транспорт"
          />
          <View style={styles.inputBlock}>
            <InputDouble
              inputFrom={quantityStart}
              inputTo={quantityEnd}
              setInputFrom={setQuantityStart}
              setInputTo={setQuantityEnd}
              label="Количество мест"
            />
            <InputDouble
              inputFrom={priceStart}
              inputTo={priceEnd}
              setInputFrom={setPriceStart}
              setInputTo={setPriceEnd}
              label="Цена"
            />
          </View>
        </View>

        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Характеристики груза:</Text>
        </View>
        <View style={styles.formBlock}>
          <View style={styles.inputBlock}>
            <InputDouble
              inputFrom={netStart}
              inputTo={netEnd}
              setInputFrom={setNetStart}
              setInputTo={setNetEnd}
              label="Вес, тн"
            />
            <InputDouble
              inputFrom={volumeStart}
              inputTo={volumeEnd}
              setInputFrom={setVolumeStart}
              setInputTo={setVolumeEnd}
              label="Объем, м3"
            />
          </View>
        </View>
        <View style={styles.formBlock}>
          <View style={styles.inputBlock}>
            <InputDouble
              inputFrom={widthStart}
              inputTo={widthtEnd}
              setInputFrom={setWidthStart}
              setInputTo={setWidthEnd}
              label="Ширина, м"
            />
            <InputDouble
              inputFrom={lengthStart}
              inputTo={lengthEnd}
              setInputFrom={setLengthStart}
              setInputTo={setLengthEnd}
              label="Длина, м"
            />
            <InputDouble
              inputFrom={heightStart}
              inputTo={heightEnd}
              setInputFrom={setHeightStart}
              setInputTo={setHeightEnd}
              label="Высота, м"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={getSearchResults}>
          <Text style={styles.buttonText}>НАЙТИ ГРУЗЫ</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyTheme.background,
  },
  formBlock: {
    backgroundColor: 'white',
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
  },
  inputBlock: {
    marginTop: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
    // fontFamily:'IBM-Bold',
    fontWeight: 'bold',
  },
  visibleContainer: {
    width: Dimensions.get('window').width - 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  placeholderLabel: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    // fontFamily: 'IBM-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  placeText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    // fontFamily: 'IBM-Regular',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
  },
  label: {
    // fontFamily: 'IBM-SemiBold',
    fontSize: 15,
    lineHeight: 24,
    // marginLeft: 15,
    color: MyTheme.grey,
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
  },
  sectionGrey: {
    height: 35,
    width: '100%',
    backgroundColor: MyTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
