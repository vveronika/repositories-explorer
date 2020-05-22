import * as actionTypes from 'redux/actionTypes';
import { API_BASE_URL } from 'helpers/constants';
import { getAction } from 'helpers/api';
import { Repository } from 'models/repositories.types';

function fetchRepositoriesLoading() {
  return {
    type: actionTypes.FETCH_REPOSITORIES,
  };
}

function fetchRepositories(userName: string, onSuccess?: Function) {
  return (dispatch: Function) => {
    dispatch(() => dispatch(fetchRepositoriesLoading()));
    getAction(`${API_BASE_URL}/users/${userName}/repos?sort=pushed`)
      .then((res: Repository[]) => {
        onSuccess && onSuccess(res);
        return dispatch(fetchRepositoriesSuccess(res));
      })
      .catch(() => {
        return dispatch(fetchRepositoriesFailed(true));
      });
  };
}

function fetchRepositoriesFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_REPOSITORIES_FAILED,
    failed,
  };
}

function fetchRepositoriesSuccess(repositories: Repository[]) {
  return {
    type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
    repositories,
  };
}

export { fetchRepositories };
