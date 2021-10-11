import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {MyTheme} from '../../../components/layout/theme';
import {additDataForCargoPost} from '../../../redux/actions/transitStore';

import {
  getDocuments,
  getLoadingConditions,
  getTransportConditions,
  getFreightConditions,
} from '../../../redux/actions/additionalData';

export default function AdditionalParams() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocuments());
    dispatch(getLoadingConditions());
    dispatch(getTransportConditions());
    dispatch(getFreightConditions());
  }, []);

  const additionalData = useSelector(state => state.additionalData);
  const [checkDoc, setCheckDocum] = useState({});
  const [checkLoadCond, setCheckLoadCond] = useState({});
  const [checkTransCond, setCheckTransCond] = useState({});
  const [checkFreightCond, setCheckFreightCond] = useState({});

  const reverse = (obj, arr) => {
    for (let key in obj) {
      if (obj[key] === true) {
        arr.push(key);
      }
    }
    return arr;
  };
  let doc1 = [];
  let doc2 = [];
  let doc3 = [];
  let doc4 = [];
  const Confirm = () => {
    let documents = reverse(checkDoc, doc1);
    let loadCond = reverse(checkLoadCond, doc2);
    let transCond = reverse(checkTransCond, doc3);
    let freightCond = reverse(checkFreightCond, doc4);
    const data = {
      additionals: {
        documents,
        loadCond,
        transCond,
        freightCond,
      },
    };
    dispatch(additDataForCargoPost(data));
    navigation.navigate('AddPostForm');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Документы</Text>
        <View style={styles.checkboxBlockSection}>
          {additionalData.documents.data ? (
            additionalData.documents.data.map((b, index) => {
              return (
                <View key={b.id} style={styles.checkboxBlock}>
                  <CheckBox
                    boxType="square"
                    disabled={false}
                    value={checkDoc[b.id]}
                    onValueChange={newValue => {
                      setCheckDocum({...checkDoc, [b.id]: newValue});
                    }}
                  />
                  <Text style={styles.label}>{b.name}</Text>
                </View>
              );
            })
          ) : (
            <ActivityIndicator size={'large'} color={MyTheme.blue} />
          )}
        </View>
        <Text style={styles.title}>Условия погрузки</Text>
        <View style={styles.checkboxBlockSection}>
          {additionalData.loadingCond.data ? (
            additionalData.loadingCond.data.map((b, index) => {
              return (
                <View key={b.id} style={styles.checkboxBlock}>
                  <CheckBox
                    boxType="square"
                    disabled={false}
                    value={checkLoadCond[b.id]}
                    onValueChange={newValue => {
                      setCheckLoadCond({...checkLoadCond, [b.id]: newValue});
                    }}
                  />
                  <Text style={styles.label}>{b.name}</Text>
                </View>
              );
            })
          ) : (
            <ActivityIndicator size={'large'} color={MyTheme.blue} />
          )}
        </View>
        <Text style={styles.title}>Условия транспортировки</Text>
        <View style={styles.checkboxBlockSection}>
          {additionalData.transportCond.data ? (
            additionalData.transportCond.data.map((b, index) => {
              return (
                <View key={b.id} style={styles.checkboxBlock}>
                  <CheckBox
                    boxType="square"
                    disabled={false}
                    value={checkTransCond[b.id]}
                    onValueChange={newValue => {
                      setCheckTransCond({...checkTransCond, [b.id]: newValue});
                    }}
                  />
                  <Text style={styles.label}>{b.name}</Text>
                </View>
              );
            })
          ) : (
            <ActivityIndicator size={'large'} color={MyTheme.blue} />
          )}
        </View>
        <Text style={styles.title}>Условия фрахта</Text>
        <View style={styles.checkboxBlockSection}>
          {additionalData.freightCond.data ? (
            additionalData.freightCond.data.map((b, index) => {
              return (
                <View key={b.id} style={styles.checkboxBlock}>
                  <CheckBox
                    boxType="square"
                    disabled={false}
                    value={checkFreightCond[b.id]}
                    onValueChange={newValue => {
                      setCheckFreightCond({
                        ...checkFreightCond,
                        [b.id]: newValue,
                      });
                    }}
                  />
                  <Text style={styles.label}>{b.name}</Text>
                </View>
              );
            })
          ) : (
            <ActivityIndicator size={'large'} color={MyTheme.blue} />
          )}
        </View>
        <TouchableOpacity onPress={Confirm} style={styles.confirm}>
          <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    // fontFamily:'IMB-SemiBold',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 7,
    color: MyTheme.grey,
  },
  checkboxBlockSection: {
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    backgroundColor: 'white',
  },
  checkboxBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Platform.OS === 'ios' ? 6 : 3,
    marginHorizontal: 5,
  },
  confirm: {
    alignSelf: 'center',
    width: 300,
    height: 45,
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 10 : 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  label: {
    marginLeft: 10,
    fontSize: 17,
  },
});
