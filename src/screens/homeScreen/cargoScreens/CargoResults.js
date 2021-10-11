import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Alert,
  Pressable,
} from 'react-native';
import SearchResultItem from '../../../components/SearchElements/SearchResultItem';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/core';
import {MyTheme} from '../../../components/layout/theme';
import {useDispatch, useSelector} from 'react-redux';
import {quantityItemsforCargoResults} from '../../../redux/actions/transitStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllFavoritesCargoPosts} from '../../../redux/actions/profileFavorites';

//TODO: возможно нужно очищать стейт по количеству грузов в заголовке когда происходит в хедере клик назад

export default function CargoResults() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState(false);
  const [newData, setNewData] = useState([]);
  const [pageQuantity, setPageQuntity] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  const [token, setToken] = useState(null);

  //!Get & Set Token
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

  //!Get filtered items
  const filter = route.params;
  const getData = async () => {
    let request = `https://test.money-men.kz/api/filterCargo?page=${currentPage}&`;
    const createRequest = () => {
      let newRequest = '';
      for (let i in filter.data) {
        if (filter.data[i] !== null) {
          newRequest = newRequest + i + '=' + filter.data[i] + '&';
        }
      }
      request = request + newRequest;
      return request;
    };
    try {
      const uri = await createRequest();
      const res = await axios({
        method: 'GET',
        url: uri,
      });
      if (res.data.success === true && res.data.data.length > 0) {
        setPageQuntity(res.data.pagination.max_page);
        dispatch(quantityItemsforCargoResults(res.data.pagination.total));
        setNewData([...newData, ...res.data.data]);
      } else if (res.data.success === true && res.data.data.length === 0) {
        setMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    return () => {};
  }, [currentPage]);

  if (message) {
    Alert.alert(
      'Объявлений с такими параметрами нет',
      'Попробуйте изменить параметры поиска',
      [{text: 'OK', onPress: () => navigation.goBack()}],
    );
  }

  //!Infinite scroll
  const renderLoader = () => {
    if (currentPage < pageQuantity) {
      return (
        <Pressable onPress={loadMoreItem}>
          <View style={styles.loader}>
            <Text style={styles.loaderText}>Загрузить еще ...</Text>
          </View>
        </Pressable>
      );
    } else {
      return null;
    }
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  //! Get User FavoritesList
  useEffect(() => {
    if (token) {
      dispatch(getAllFavoritesCargoPosts(token));
    }
  }, [token]);
  const profileFavorites = useSelector(state => state.profileFavorites);

  let arr = [];
  useEffect(() => {
    if (profileFavorites.cargoPosts) {
      profileFavorites.cargoPosts.forEach(item => {
        arr.push(item.id);
      });
      setFavoritesList(arr);
    }
  }, [profileFavorites]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newData}
        renderItem={({item}) => (
          <SearchResultItem
            from={item.details[0].from_string}
            to={item.details[0].to_string}
            fromId={item.details[0].from}
            toId={item.details[0].to}
            distance={'600'}
            net={item.details[0].net}
            volume={item.details[0].volume}
            type_transport={item.details[0].type_transport}
            start_date={item.details[0].start_date}
            title={item.details[0].title}
            rating={4.5}
            companyName={"TOO'MyCompany'"}
            price={200000}
            staus={null}
            auth={true}
            updated_at={item.updated_at}
            path={'CargoCard'}
            postId={item.id}
            isFavorite={favoritesList.includes(item.id) ? true : false}
            list={favoritesList}
          />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        scrollsToTop={false}
        // onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  loader: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  loaderText: {
    // fontFamily:'IBM-Regular',
    fontSize: 15,
    color: 'white',
  },
});
