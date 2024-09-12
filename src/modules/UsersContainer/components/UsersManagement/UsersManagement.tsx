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
    <div className="grid grid-cols-[3fr_1fr] items-center gap-8 h-dvh bg-blue-50 px-10 py-52">
      <UsersList users={users} />
      <UsersFilter inputs={inputs} />
    </div>
  );
};
