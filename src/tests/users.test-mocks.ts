import { UsersStateType, User } from 'models/users.types';

export const UsersInitialState: UsersStateType = {
  users: [],
  fetchUsersLoading: false,
  fetchUsersError: false,
};

export const FetchedUsersArray: User[] = [
  {
    id: 0,
    login: 'First user login',
    repos_url: 'https://github.com/first_example_user',
  },
  {
    id: 1,
    login: 'Second user login',
    repos_url: 'https://github.com/second_example_user',
  },
  {
    id: 2,
    login: 'Third user login',
    repos_url: 'https://github.com/third_example_user',
  },
];
