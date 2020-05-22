import reducer from 'redux/reducers/repositories';
import expect from 'expect';
import * as actions from 'redux/actionTypes';
import { RepositoriesAction } from 'models/repositories.types';
import {
  FetchedRepositoriesArray,
  RepositoriesInitialState,
} from 'tests/repositories.test-mocks';

describe('repositorries reducer', () => {
  it('should return initial repositories state', () => {
    const action: RepositoriesAction = {
      type: 'RETURN_INITIAL_STATE_ACTION',
      repositories: [],
      fetchRepositoriesLoading: false,
      fetchRepositoriesError: false,
    };
    expect(reducer(undefined, action)).toEqual(RepositoriesInitialState);
  });

  it('should handle FETCH_REPOSITORIES', () => {
    const action: RepositoriesAction = {
      type: actions.FETCH_REPOSITORIES,
      repositories: [],
      fetchRepositoriesLoading: true,
      fetchRepositoriesError: false,
    };
    expect(reducer(RepositoriesInitialState, action)).toEqual({
      repositories: [],
      fetchRepositoriesLoading: true,
      fetchRepositoriesError: false,
    });
  });

  it('should handle FETCH_USERS_SUCCESS', () => {
    const action: RepositoriesAction = {
      type: actions.FETCH_REPOSITORIES_SUCCESS,
      repositories: FetchedRepositoriesArray,
      fetchRepositoriesLoading: false,
      fetchRepositoriesError: false,
    };
    expect(reducer(RepositoriesInitialState, action)).toEqual({
      repositories: FetchedRepositoriesArray,
      fetchRepositoriesLoading: false,
      fetchRepositoriesError: false,
    });
  });

  it('should handle FETCH_REPOSITORIES_FAILED', () => {
    const action: RepositoriesAction = {
      type: actions.FETCH_REPOSITORIES_FAILED,
      fetchRepositoriesLoading: false,
      fetchRepositoriesError: true,
    };
    expect(reducer(RepositoriesInitialState, action)).toEqual({
      repositories: [],
      fetchRepositoriesLoading: false,
      fetchRepositoriesError: true,
    });
  });
});
