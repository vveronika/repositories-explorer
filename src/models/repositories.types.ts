import { User } from "./users.types";

export interface Repository {
  id: number;
  name: string;
  owner: User;
  html_url: string;
  stargazers_count: number;
  description: string;
}

export interface RepositoriesStateType {
  repositories: Repository[];
  fetchRepositoriesLoading: boolean;
  fetchRepositoriesError: boolean;
}

interface returnInitialRepositoriesStateAction {
  type: 'RETURN_INITIAL_STATE_ACTION';
  repositories: Repository[];
  fetchRepositoriesLoading: boolean;
  fetchRepositoriesError: boolean;
}

export interface fetchRepositoriesAction {
  type: 'FETCH_REPOSITORIES';
  repositories: Repository[];
  fetchRepositoriesLoading: boolean;
  fetchRepositoriesError: boolean;
}

export interface fetchRepositoriesSuccessAction {
  type: 'FETCH_REPOSITORIES_SUCCESS';
  repositories: Repository[];
  fetchRepositoriesLoading: boolean;
  fetchRepositoriesError: boolean;
}

export interface fetchRepositoriesFailedAction {
  type: 'FETCH_REPOSITORIES_FAILED';
  fetchRepositoriesLoading: boolean;
  fetchRepositoriesError: boolean;
}

export type RepositoriesAction =
  | fetchRepositoriesAction
  | fetchRepositoriesSuccessAction
  | fetchRepositoriesFailedAction
  | returnInitialRepositoriesStateAction;
