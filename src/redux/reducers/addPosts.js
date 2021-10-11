import {ADD_CARGO_POSTS_SUCCESS, ADD_CARGO_POSTS_FAIL} from '../types';

const initialState = {
  loading: true,
  result: false,
  error: false,
  message: null,
};

export const addPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARGO_POSTS_SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: false,
        message: action.message || null,
      };
    case ADD_CARGO_POSTS_FAIL:
      return {
        ...state,
        result: false,
        loading: true,
        error: true,
      };
    default:
      return state;
  }
};
