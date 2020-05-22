import { combineReducers } from 'redux';
import usersReducer from './users';
import repositoriesReducer from './repositories';

export default combineReducers({
  users: usersReducer,
  repositories: repositoriesReducer,
});
