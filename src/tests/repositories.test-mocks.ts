import { Repository, RepositoriesStateType } from 'models/repositories.types';
import { FetchedUsersArray } from './users.test-mocks';

export const RepositoriesInitialState: RepositoriesStateType = {
  repositories: [],
  fetchRepositoriesLoading: false,
  fetchRepositoriesError: false,
};

export const FetchedRepositoriesArray: Repository[] = [
  {
    id: 0,
    name: 'First example repository',
    owner: FetchedUsersArray[0],
    html_url: 'https://github.com/first_example_user/first-example-repo',
    stargazers_count: 0,
    description: 'Example description of first repo (first user)',
  },
  {
    id: 1,
    name: 'Second example repository',
    owner: FetchedUsersArray[1],
    html_url: 'https://github.com/second_example_user/first-example-repo',
    stargazers_count: 0,
    description: 'Example description of second repo (second user)',
  },
  {
    id: 2,
    name: 'Third example repository',
    owner: FetchedUsersArray[1],
    html_url: 'https://github.com/second_example_user/second-example-repo',
    stargazers_count: 0,
    description: 'Example description of third repo (second user)',
  },
];
