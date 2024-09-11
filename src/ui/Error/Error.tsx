import { FC } from 'react';

type Props = {
  onRetry: React.MouseEventHandler<HTMLButtonElement>;
};

export const Error: FC<Props> = ({ onRetry }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-red-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        An error occurred while loading data
      </h2>

      <p className="text-gray-700 mb-6">Please try again later</p>

      <button
        onClick={onRetry}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
      >
        Try Again
      </button>
    </div>
  );
};
