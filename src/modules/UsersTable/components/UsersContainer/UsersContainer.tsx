import { FC } from 'react';

import { usersAPI } from '../../store';

export const UsersContainer: FC = () => {
  const { data: users } = usersAPI.useFetchAllUsersQuery('');

  console.log(users);

  return 1;
};
