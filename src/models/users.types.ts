export interface User {
  login: string;
  id: number;
  repos_url: string;
}

export interface UsersStateType {
  users: User[];
  fetchUsersLoading: boolean;
  fetchUsersError: boolean;
}

interface returnInitialUsersStateAction {
  type: 'RETURN_INITIAL_STATE_ACTION';
  users: User[];
  fetchUsersLoading: boolean;
  fetchUsersError: boolean;
}

export interface fetchUsersAction {
  type: 'FETCH_USERS';
  users: User[];
  fetchUsersLoading: boolean;
  fetchUsersError: boolean;
}

export interface fetchUsersSuccessAction {
  type: 'FETCH_USERS_SUCCESS';
  users: User[];
  fetchUsersLoading: boolean;
  fetchUsersError: boolean;
}

export interface fetchUsersFailedAction {
  type: 'FETCH_USERS_FAILED';
  fetchUsersLoading: boolean;
  fetchUsersError: boolean;
}

export type UsersAction =
  | fetchUsersAction
  | fetchUsersSuccessAction
  | fetchUsersFailedAction
  | returnInitialUsersStateAction;
