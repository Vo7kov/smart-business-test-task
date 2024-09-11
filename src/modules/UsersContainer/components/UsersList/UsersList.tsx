import { FC } from 'react';
import { type User } from '../../types';

type Props = {
  users: User[];
};

export const UsersList: FC<Props> = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 border-b-2 border-gray-200">
          <tr className="text-left text-gray-700 font-bold uppercase">
            <th className="p-3">Name</th>
            <th className="p-3">Username</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
          </tr>
        </thead>

        <tbody className="text-gray-900">
          {users.map((user) => {
            const { id, name, username, email, phone } = user;

            return (
              <tr
                key={id}
                className={`border-b ${
                  id % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <td className="p-3">{name}</td>
                <td className="p-3">{username}</td>
                <td className="p-3">{email}</td>
                <td className="p-3">{phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
