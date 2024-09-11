import { FC } from 'react';

import { usersAPI } from '../../store';

import { UsersList } from '../../components/UsersList/UsersList';
import { UsersFilter } from '../../components/UsersFilter/UsersFilter';

import { Loader } from '@/ui/Loader';
import { Error } from '@/ui/Error';

export const UsersManagement: FC = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    refetch,
  } = usersAPI.useFetchAllUsersQuery('');

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error onRetry={refetch} />;
  }

  return (
    <div className="flex gap-4 justify-center items-center h-dvh bg-blue-50">
      <UsersList users={users} />
      <UsersFilter />
    </div>
  );
};
