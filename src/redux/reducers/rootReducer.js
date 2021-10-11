import {combineReducers} from 'redux';
import {helpDataReducer} from './additionalData';
import {addPostsReducer} from './addPosts';
import {authReducer} from './auth';
import {favoriteReducer} from './profileFavorites';
import {transitStoreReducer} from './transitStore';

export const rootReducer = combineReducers({
  auth: authReducer,
  additionalData: helpDataReducer,
  addedPosts: addPostsReducer,
  transitData: transitStoreReducer,
  profileFavorites: favoriteReducer,
});
