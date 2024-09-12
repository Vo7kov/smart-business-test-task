import { FC } from 'react';
import { type User } from '../../types';

type Props = {
  users: User[];
};

export const UsersList: FC<Props> = ({ users }) => {
  return (
    <div className="overflow-x-auto w-full h-full">
      <table className="bg-white border border-gray-200 w-full h-full flex flex-col">
        <thead className="bg-gray-100 border-b-2 border-gray-200 h-min">
          <tr className="text-left text-gray-700 font-bold uppercase grid grid-cols-4">
            <th className="p-3">Name</th>
            <th className="p-3">Username</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
          </tr>
        </thead>

        <tbody className="text-gray-900">
          {!users.length && (
            <tr className="w-full flex justify-center">
              <td colSpan={4} className="p-3 text-center text-gray-500">
                Nothing found matching your request
              </td>
            </tr>
          )}

          {users.map((user) => {
            const { id, name, username, email, phone } = user;

            return (
              <tr
                key={id}
                className={`border-b grid grid-cols-4 ${
                  id % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <td className="p-3 truncate">{name}</td>
                <td className="p-3 truncate">{username}</td>
                <td className="p-3 truncate">{email}</td>
                <td className="p-3 truncate">{phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
