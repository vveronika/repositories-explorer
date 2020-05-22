import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
  FETCH_USERS_FAILED,
} from '../actionTypes';
import { UsersStateType, UsersAction } from 'models/users.types';

const initialState: UsersStateType = {
  users: [],
  fetchUsersLoading: false,
  fetchUsersError: false,
};

const reducer = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        fetchUsersLoading: true,
        fetchUsersError: false,
      };
    case FETCH_USERS_SUCCESS:
      const { users } = action;
      return {
        ...state,
        users: users,
        fetchUsersLoading: false,
        fetchUsersError: false,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        users: [],
        fetchUsersLoading: false,
        fetchUsersError: true,
      };
    default:
      return state;
  }
};

export default reducer;
