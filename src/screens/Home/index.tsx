import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Repository } from 'models/repositories.types';
import { User } from 'models/users.types';
import { RootState } from 'models/root-state.types';
import { fetchUsers, fetchRepositories } from 'redux/actions';
import SearchForm from 'components/SearchForm';
import SearchResults from 'components/SearchResults';
import PageTitle from 'components/ui/PageTitle';
import PageSubtitle from 'components/ui/PageSubtitle';
import 'react-toastify/dist/ReactToastify.css';
import './home.styled.scss';

toast.configure();

interface Props {
  users: User[];
  repositories: Repository[];
  fetchUsers: (
    searchQuery: string,
    perPage: number,
    onSuccess?: Function,
  ) => void;
  fetchRepositories: (userName: string, onSuccess?: Function) => void;
  fetchUsersLoading: boolean;
}

const Home: React.FC<Props> = ({
  users,
  repositories,
  fetchUsers,
  fetchRepositories,
  fetchUsersLoading,
}) => {
  const onSubmit = (inputValue: string) => {
    fetchUsers(inputValue, 5, (res: User[]) => {
      if (res.length === 0) {
        toast.info(`No users found on query "${inputValue}"`);
      }
    });
  };

  const onFetchRepositories = (
    userName: string,
    userId: number,
    onSuccess: Function,
  ) => {
    const repos: Repository[] = repositories.filter((r) => {
      return r.owner.id === userId;
    });
    if (repos.length > 0) {
      return onSuccess(repos);
    } else {
      fetchRepositories(userName, (res: Repository[]) => onSuccess(res));
    }
  };

  return (
    <>
      <PageTitle title="Github repositories explorer" />
      <PageSubtitle
        firstSubtitle="Find"
        highlightSubtitle="any"
        secondSubtitle="github user"
      />
      <SearchForm
        onSubmit={onSubmit}
        initialInputValue=""
        loading={fetchUsersLoading}
      />
      {users && (
        <SearchResults fetchDetails={onFetchRepositories} results={users} />
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  const { users } = state.users;
  const { fetchUsersLoading } = state.users;
  const { repositories } = state.repositories;
  return { users, fetchUsersLoading, repositories };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchUsers: (searchQuery: string, perPage: number, onSuccess?: Function) =>
      dispatch(fetchUsers(searchQuery, perPage, onSuccess)),
    fetchRepositories: (userName: string, onSuccess?: Function) =>
      dispatch(fetchRepositories(userName, onSuccess)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
