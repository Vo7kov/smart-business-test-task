import { FC } from 'react';
import { UsersList } from './modules/UsersContainer';

export const App: FC = () => {
  return (
    <div className="flex justify-center items-center h-dvh bg-blue-50">
      <UsersList />
    </div>
  );
};
