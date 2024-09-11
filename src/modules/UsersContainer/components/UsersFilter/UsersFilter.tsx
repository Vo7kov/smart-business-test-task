import { FC } from 'react';
import { useAppDispatch } from '@/shared/hooks/redux';

import { usersFilterActions } from '../../store';
import { type Inputs } from '../../types';

import { getFirstCapitalString } from '../../helpers';

type Props = {
  inputs: Inputs;
};

export const UsersFilter: FC<Props> = ({ inputs }) => {
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch(
      usersFilterActions.handleInputChange({
        name: name as keyof Inputs,
        value,
      })
    );
  };

  const handleClear = (name: string) =>
    dispatch(usersFilterActions.handleClear(name as keyof Inputs));

  const handleClearAll = () => dispatch(usersFilterActions.handleClearAll());

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-md">
      <form className="grid grid-cols-1 gap-4">
        {Object.keys(inputs).map((name) => {
          const value = inputs[name as keyof Inputs];

          return (
            <label key={name} className="flex flex-col gap-1 relative">
              <span>{getFirstCapitalString(name)}</span>

              <input
                type="text"
                name={name}
                value={value}
                onChange={handleInputChange}
                placeholder={getFirstCapitalString(name)}
                className="p-2 border border-gray-300 rounded"
              />

              {!!value.length && (
                <button
                  type="button"
                  onClick={() => handleClear(name)}
                  className="absolute top-1/2 right-2"
                >
                  &#10060;
                </button>
              )}
            </label>
          );
        })}

        <button type="button" onClick={handleClearAll}>
          Clear all
        </button>
      </form>
    </div>
  );
};
