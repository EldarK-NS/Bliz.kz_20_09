import {
  SAVE_START_END_PLACES,
  SAVE_CARGO_POST_ADDITIONAL_DATA,
  REMOVE_TRANSIT_DATA,
  ITEMS_QUANTITY,
} from '../types';
import {getDocuments} from './additionalData';

export function saveStartEndPlaces(data) {
  const {start, end} = data;
  return dispatch => {
    dispatch({
      type: SAVE_START_END_PLACES,
      payload1: start,
      payload2: end,
    });
  };
}

export function additDataForCargoPost(data) {
  const {additionals} = data;
  return dispatch => {
    dispatch({
      type: SAVE_CARGO_POST_ADDITIONAL_DATA,
      payload: additionals,
    });
  };
}
export function removeDataForCargoPost() {
  return dispatch => {
    dispatch({
      type: REMOVE_TRANSIT_DATA,
    });
  };
}

export function quantityItemsforCargoResults(data) {
  return dispatch => {
    dispatch({
      type: ITEMS_QUANTITY,
      payload: data,
    });
  };
}
