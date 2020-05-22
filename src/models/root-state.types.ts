import { UsersStateType } from './users.types';
import { RepositoriesStateType } from './repositories.types';

export interface RootState {
  users: UsersStateType;
  repositories: RepositoriesStateType;
}
