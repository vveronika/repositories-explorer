import * as actionTypes from 'redux/actionTypes';
import { API_BASE_URL } from 'helpers/constants';
import { getAction } from 'helpers/api';
import { User } from 'models/users.types';

function fetchUsersLoading() {
  return {
    type: actionTypes.FETCH_USERS,
  };
}

function fetchUsers(
  searchQuery: string,
  perPage: number,
  onSuccess?: Function,
) {
  return (dispatch: Function) => {
    dispatch(() => dispatch(fetchUsersLoading()));
    setTimeout(() => {
      getAction(
        `${API_BASE_URL}/search/users?per_page=${perPage.toString()}&page=1&q=${searchQuery}`,
      )
        .then((res: any) => {
          onSuccess && onSuccess(res.items);
          return dispatch(fetchUsersSuccess(res.items));
        })
        .catch((err) => {
          return dispatch(fetchUsersFailed(true));
        });
    }, 1000);
  };
}

function fetchUsersFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_USERS_FAILED,
    failed,
  };
}

function fetchUsersSuccess(users: User[]) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users,
  };
}

export { fetchUsers };
