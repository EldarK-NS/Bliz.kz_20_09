import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
  Modal,
  Image,
  Platform,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import InputDouble from '../../../components/SearchElements/InputDouble';
import MyPicker from '../../../components/SearchElements/MyPicker';
import MyDatePicker from '../../../components/SearchElements/MyDatePicker';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTransportTypes,
  getTransportSubTypes,
  getPaymentTypes,
  getCurrencyTypes,
} from '../../../redux/actions/additionalData';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import NumberInput from '../../../components/SearchElements/NumberInput';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeDataForCargoPost} from '../../../redux/actions/transitStore';
import axios from 'axios';
import {SimpleInput} from '../../../components/SearchElements/SimpleInput';

export default function AddCargoPostForm() {
  const [modalShow, setModalShow] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  //! Get Token+++
  const [token, setToken] = useState(null);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  //?---------------------------------------//

  //!Fetch Additional Data
  useEffect(() => {
    dispatch(getTransportTypes());
    dispatch(getPaymentTypes());
    dispatch(getCurrencyTypes());
  }, []);

  const additionalData = useSelector(state => state.additionalData);
  const transitData = useSelector(state => state.transitData);

  //!Set Destination++++
  const [fromString, setFromString] = useState('????????????, ??????????????????');
  const [destinString, setDestinString] = useState('??????-????????????, ??????????????????');
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
    useState('???????????????? ????????');

  //! Set Unloading Date+++
  const [isUnloadingDateVisible, setIsUnloadingDateVisibility] =
    useState(false);
  const [unloadingDate, setUnloadingDate] = useState(null);
  const [unloadingDatePlaceholder, setUnloadingDatePlaceholder] =
    useState('???????????????? ????????');
  //?---------------------------------------//

  //!Cargo description+++
  const [description, setDescription] = useState('');
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

  //!Quantity+++
  const [quantity, setQuantity] = useState(null);
  //?---------------------------------------//

  //!Transport+++
  const transportPickerData = () => {
    const newData = [
      ...additionalData.transportTypes,
      {id: null, name: '??????????'},
    ];
    return newData;
  };

  const PickerData = (data, label) => {
    const newData = [...data, {id: null, name: label}];
    return newData;
  };

  const [transportTypeModal, setTransporTypetModal] = useState(false);
  const [transportTypeId, setTransportTypeId] = useState(null);
  const [transportTypeString, setTransportTypeString] = useState('??????????');

  const [transportSubTypeModal, setTransportSubTypeModal] = useState(false);
  const [transportSubTypeId, setTransportSubTypeId] = useState(null);
  const [transportSubTypeString, setTransportSubTypeString] = useState(null);

  useEffect(() => {
    dispatch(getTransportSubTypes(transportTypeId));
    setTransportSubTypeId(null);
    setTransportSubTypeString(null);
  }, [transportTypeId]);
  //?---------------------------------------//

  //!Price+++
  const [price, setPrice] = useState(null);

  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const [paymentString, setPaymentString] = useState('???????????????? ???????????? ????????????');

  const [currencyModal, setCurrencyModal] = useState(false);
  const [currencyId, setCurrencyId] = useState(null);
  const [currencyString, setCurrencyString] = useState(
    '???????????????? ???????????? ??????????????',
  );
  //?---------------------------------------//
  //!Additional params+++

  const additionalParams = () => {
    navigation.navigate('AdditionalParams');
  };

  const [documents, setDocuments] = useState(null);
  const [loadingConditions, setLoadingConditions] = useState(null);
  const [freightConditions, setFreightConditions] = useState(null);
  const [transportationConditions, setTransportationConditions] =
    useState(null);

  useEffect(() => {
    if (transitData.additionalCargoPost !== null) {
      setDocuments(transitData.additionalCargoPost.documents);
      setLoadingConditions(transitData.additionalCargoPost.loadCond);
      setFreightConditions(transitData.additionalCargoPost.freightCond);
      setTransportationConditions(transitData.additionalCargoPost.transCond);
    }
  }, [transitData.additionalCargoPost]);
  //?---------------------------------------//
  const AddPost = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://test.money-men.kz/api/newAddPost?token=${token}&category_id=1&sub_id=1&title=${description}&from=${fromCoord}&to=${destinCoord}&volume=${volumeStart}&net=${netStart}&start_date=${loadingDate}&end_date=${unloadingDate}&documents[]=${documents}&price=${price}&price_type=${currencyId}&payment_type=${paymentId}&type_transport=${transportTypeId}&type_sub_transport[]=${transportSubTypeId}&from_string=${fromString}&to_string=${destinString}&loading[]=${loadingConditions}&condition[]=${transportationConditions}&addition[]=${freightConditions}`,
      });
      console.log(res);
      if (res.data.success) {
        dispatch(removeDataForCargoPost());
        setModalShow(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      // extraHeight={200}
      enableAutomaticScroll={false}
      // extraScrollHeight={200}
    >
      <View style={styles.container}>
        <Modal transparent={true} visible={modalShow}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#000000aa',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                margin: 20,
                padding: 40,
                borderRadius: 20,
                width: Dimensions.get('window').width - 50,
                height: Dimensions.get('window').height - 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../../assets/images/Bitmap.png')}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>???????????????????? ??????????????????????????!</Text>
              <Text style={styles.modalSubTitle}>
                ????????????, ???????????? ?????????????????? ?????????????? ?????????? ???????? ???????????????????? ?? ????????
                ???????????????????? ????????????.
              </Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalShow(false);
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}],
                  });
                }}>
                <Text style={styles.modalbButtonText}>?? ????????????????????</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Pressable
          style={styles.formBlock}
          onPress={() => navigation.navigate('PlaceAutocomplite2')}>
          <View style={styles.visibleContainer}>
            <View>
              <Text style={styles.placeholderLabel}>????????????</Text>
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
              <Text style={styles.placeholderLabel}>????????</Text>
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
        <View style={styles.formBlock}>
          <View>
            <MyDatePicker
              visibility={isLoadingDateVisible}
              setVisible={setIsLoadingDateVisibility}
              setDate={setLoadingDate}
              setTitle={setLoadingDatePlaceholder}
              placeholder={loadingDatePlaceholder}
              title={'???????? ????????????????'}
            />
          </View>
          <View>
            <MyDatePicker
              visibility={isUnloadingDateVisible}
              setVisible={setIsUnloadingDateVisibility}
              setDate={setUnloadingDate}
              setTitle={setUnloadingDatePlaceholder}
              placeholder={unloadingDatePlaceholder}
              title={'???????? ????????????????'}
            />
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>???????????????????????????? ??????????:</Text>
        </View>
        <View style={styles.formBlock}>
          <View>
            <View style={styles.textInputBlock}>
              <SimpleInput
                label={'???????????????? ??????????'}
                setInputText={setDescription}
                inputText={description}
              />
            </View>
            <View style={styles.inputBlock}>
              <InputDouble
                inputFrom={netStart}
                inputTo={netEnd}
                setInputFrom={setNetStart}
                setInputTo={setNetEnd}
                label="??????, ????"
              />
              <InputDouble
                inputFrom={volumeStart}
                inputTo={volumeEnd}
                setInputFrom={setVolumeStart}
                setInputTo={setVolumeEnd}
                label="??????????, ??3"
              />
            </View>
          </View>
        </View>

        <View style={styles.formBlock}>
          <View style={styles.inputBlock}>
            <InputDouble
              inputFrom={widthStart}
              inputTo={widthtEnd}
              setInputFrom={setWidthStart}
              setInputTo={setWidthEnd}
              label="????????????, ??"
            />
            <InputDouble
              inputFrom={lengthStart}
              inputTo={lengthEnd}
              setInputFrom={setLengthStart}
              setInputTo={setLengthEnd}
              label="??????????, ??"
            />
            <InputDouble
              inputFrom={heightStart}
              inputTo={heightEnd}
              setInputFrom={setHeightStart}
              setInputTo={setHeightEnd}
              label="????????????, ??"
            />
            <NumberInput
              input={quantity}
              setInput={setQuantity}
              label="???????????????????? ????????"
              placeholder={'0'}
            />
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>??????????????????:</Text>
        </View>
        <View style={styles.formBlock}>
          <MyPicker
            modalOpen={transportTypeModal}
            setModalOpen={setTransporTypetModal}
            value={transportTypeId}
            setValue={setTransportTypeId}
            data={[...additionalData.transportTypes, {id: null, name: '??????????'}]}
            valueString={transportTypeString}
            setValueString={setTransportTypeString}
            placeholder="???????????? ??????????????????????????????"
          />
          <MyPicker
            modalOpen={transportSubTypeModal}
            setModalOpen={setTransportSubTypeModal}
            value={transportSubTypeId}
            setValue={setTransportSubTypeId}
            data={[
              ...additionalData.transportSubTypes,
              {id: null, name: '?????????????? ?????? ????????????????????'},
            ]}
            valueString={transportSubTypeString}
            setValueString={setTransportSubTypeString}
            placeholder="?????? ????????????????????"
          />
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>?????????????????? ????????????????:</Text>
        </View>
        <View style={styles.formBlock}>
          <NumberInput
            input={price}
            setInput={setPrice}
            label="????????"
            placeholder={'0'}
          />
          <MyPicker
            modalOpen={currencyModal}
            setModalOpen={setCurrencyModal}
            value={currencyId}
            setValue={setCurrencyId}
            valueString={currencyString}
            setValueString={setCurrencyString}
            placeholder="????????????"
            data={[
              ...additionalData.currencyTypes,
              {id: null, name: '?????????????? ???????????? ??????????????'},
            ]}
          />
          <MyPicker
            modalOpen={paymentModal}
            setModalOpen={setPaymentModal}
            value={paymentId}
            setValue={setPaymentId}
            valueString={paymentString}
            setValueString={setPaymentString}
            placeholder="???????????? ????????????"
            data={[
              ...additionalData.paymentTypes,
              {id: null, name: '?????????????? ???????????? ????????????'},
            ]}
          />
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>???????????????????????????? ??????????????????:</Text>
        </View>
        <Pressable style={styles.formBlock} onPress={additionalParams}>
          <View style={styles.additParams}>
            <Text style={styles.additParamsText}>
              ??????????????????, ???????????? ????????????????, ?????????????? ??????????????????
            </Text>
            <EntypoIcon name="chevron-right" size={18} color={MyTheme.grey} />
          </View>
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={AddPost}>
          <Text style={styles.buttonText}>???????????????? ????????????????????</Text>
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
  additParams: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width - 30,
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
  },
  additParamsText: {
    marginLeft: 10,
    paddingVertical: 10,
    // fontFamily: 'IBM-Regular',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
    width: 250,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalTitle: {
    // fontFamily:'IBM-Bold',
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.blue,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '75%',
    textAlign: 'center',
  },
  modalSubTitle: {
    // fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.grey,
    marginBottom: 40,
    width: '85%',
    textAlign: 'center',
  },
  modalButton: {
    width: 220,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyTheme.background,
  },
  modalbButtonText: {
    // fontFamily:'IBM-SemiBold',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
    fontWeight: '600',
  },
  modalImage: {
    width: 84,
    height: 84,
    marginBottom: 30,
  },
});
