import {
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_FAILED,
} from '../actionTypes';
import { RepositoriesStateType, RepositoriesAction } from 'models/repositories.types';

const initialState: RepositoriesStateType = {
  repositories: [],
  fetchRepositoriesLoading: false,
  fetchRepositoriesError: false,
};

const reducer = (state = initialState, action: RepositoriesAction) => {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return {
        ...state,
        fetchRepositoriesLoading: true,
        fetchRepositoriesError: false,
      };
    case FETCH_REPOSITORIES_SUCCESS:
      const { repositories } = action;
      return {
        ...state,
        repositories: state.repositories.concat(repositories),
        fetchRepositoriesLoading: false,
        fetchRepositoriesError: false,
      };
    case FETCH_REPOSITORIES_FAILED:
      return {
        ...state,
        repositories: [],
        fetchRepositoriesLoading: false,
        fetchRepositoriesError: true,
      };
    default:
      return state;
  }
};

export default reducer;
