import reducer from 'redux/reducers/users';
import * as actions from 'redux/actionTypes';
import expect from 'expect';
import { UsersAction } from 'models/users.types';
import { FetchedUsersArray, UsersInitialState } from 'tests/users.test-mocks';

describe('users reducer', () => {
  it('should return initial users state', () => {
    const action: UsersAction = {
      type: 'RETURN_INITIAL_STATE_ACTION',
      users: [],
      fetchUsersLoading: false,
      fetchUsersError: false,
    };
    expect(reducer(undefined, action)).toEqual(UsersInitialState);
  });

  it('should handle FETCH_USERS', () => {
    const action: UsersAction = {
      type: actions.FETCH_USERS,
      users: [],
      fetchUsersLoading: true,
      fetchUsersError: false,
    };
    expect(reducer(UsersInitialState, action)).toEqual({
      users: [],
      fetchUsersLoading: true,
      fetchUsersError: false,
    });
  });

  it('should handle FETCH_USERS_SUCCESS', () => {
    const action: UsersAction = {
      type: actions.FETCH_USERS_SUCCESS,
      users: FetchedUsersArray,
      fetchUsersLoading: false,
      fetchUsersError: false,
    };
    expect(reducer(UsersInitialState, action)).toEqual({
      users: FetchedUsersArray,
      fetchUsersLoading: false,
      fetchUsersError: false,
    });
  });

  it('should handle FETCH_USERS_FAILED', () => {
    const action: UsersAction = {
      type: actions.FETCH_USERS_FAILED,
      fetchUsersLoading: false,
      fetchUsersError: true,
    };
    expect(reducer(UsersInitialState, action)).toEqual({
      users: [],
      fetchUsersLoading: false,
      fetchUsersError: true,
    });
  });
});
