import { FC } from 'react';

import { useAppSelector } from '@/shared/hooks/redux';
import { usersAPI } from '../../store';

import { UsersList } from '../../components/UsersList/UsersList';
import { UsersFilter } from '../../components/UsersFilter/UsersFilter';

import { Loader } from '@/ui/Loader';
import { Error } from '@/ui/Error';

export const UsersManagement: FC = () => {
  const inputs = useAppSelector((state) => state.usersFilter);

  const {
    data: users = [],
    isLoading,
    isError,
    refetch,
  } = usersAPI.useFetchAllUsersQuery(inputs);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error onRetry={refetch} />;
  }

  return (
    <div className="flex gap-8 justify-center items-center h-dvh bg-blue-50 px-10">
      <UsersList users={users} />
      <UsersFilter inputs={inputs} />
    </div>
  );
};
