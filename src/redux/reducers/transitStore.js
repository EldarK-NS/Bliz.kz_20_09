import {
  SAVE_START_END_PLACES,
  SAVE_CARGO_POST_ADDITIONAL_DATA,
  REMOVE_TRANSIT_DATA,
  ITEMS_QUANTITY,
} from '../types';

const initialState = {
  startPlaceCargo: null,
  endPlaceCargo: null,
  additionalCargoPost: null,
  itemsQuantity: '',
};

export const transitStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_START_END_PLACES:
      return {
        ...state,
        startPlaceCargo: action.payload1,
        endPlaceCargo: action.payload2,
      };
    case SAVE_CARGO_POST_ADDITIONAL_DATA:
      return {
        ...state,
        additionalCargoPost: action.payload,
      };
    case ITEMS_QUANTITY:
      return {
        ...state,
        itemsQuantity: action.payload,
      };
    case REMOVE_TRANSIT_DATA:
      return {
        ...state,
        startPlaceCargo: null,
        endPlaceCargo: null,
        additionalCargoPost: null,
      };

    default:
      return state;
  }
};
