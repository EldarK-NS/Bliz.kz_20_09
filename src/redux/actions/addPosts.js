import {ADD_CARGO_POSTS_SUCCESS, ADD_CARGO_POSTS_FAIL} from '../types';
import axios from 'axios';

export function AddCargoPost(data) {
  const {
    token,
    category_id,
    sub_id,
    title,
    from,
    to,
    volume,
    net,
    start_date,
    end_date,
    documents,
    price,
    price_type,
    payment_type,
    type_transport,
    type_sub_transport,
    from_string,
    to_string,
    loading,
    condition,
  } = data;
  return async dispatch => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://test.money-men.kz/api/newAddPost?token=${token}&category_id=${category_id}&sub_id=${sub_id}&title=${title}&from=${from}&to=${to}&volume=${volume}&net=${net}&start_date=${start_date}&end_date=${end_date}&documents[]=${documents}&price=${price}&price_type=${price_type}&payment_type=${payment_type}&type_transport=${type_transport}&type_sub_transport[]=${type_sub_transport}&from_string=${from_string}&to_string=${to_string}&loading[]=${loading}&condition[]=${condition}`,
      });
      console.log('FROM_REDUX-DATA', res.data);
      dispatch({
        type: ADD_CARGO_POSTS_SUCCESS,
        payload: res.data.success,
        message: res.data.message || null,
      });
    } catch (error) {
      console.log('error', error);
      dispatch({
        type: ADD_CARGO_POSTS_FAIL,
      });
    }
  };
}

// token,
//       category_id,
//       sub_id,
//       title,
//       from,
//       to,
//       volume,
//       net,
//       start_date,
//       end_date,
//       documents,
//       price,
//       price_type,
//       payment_type,
//       type_transport,
//       type_sub_transport,
//       from_string,
//       to_string,
