import {
  GET_ALL_CARGO_FAVORITES_SUCCESS,
  GET_ALL_CARGO_FAVORITES_FAIL,
  ADD_ITEM_TO_CARGO_FAVORITES_SUCCESS,
  ADD_ITEM_TO_CARGO_FAVORITES_FAIL,
  REMOVE_ITEM_FROM_CARGO_FAVORITES_SUCCESS,
  REMOVE_ITEM_FROM_CARGO_FAVORITES_FAIL,
} from '../types';

const initialState = {
  loading: true,
  cargoPosts: [],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CARGO_FAVORITES_SUCCESS:
      return {
        ...state,
        loadinf: false,
        cargoPosts: action.payload,
      };
    case GET_ALL_CARGO_FAVORITES_FAIL:
      return {
        ...state,
        loading: true,
        cargoPosts: [],
      };
    default:
      return state;
  }
};
