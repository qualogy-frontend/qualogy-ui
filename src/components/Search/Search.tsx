import React, { ChangeEventHandler, FC } from 'react';
import { FaSearch } from 'react-icons/fa';

export interface ISearchProps {
  value: string;
  OnTextChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const Search: FC<ISearchProps> = ({
  placeholder = 'Zoek naar vacature',
  value,
  OnTextChange,
}) => {
  return (
    <div className="search__bar__container relative w-full">
      <input
        className="search__bar rounded w-full p-4 text-lg pr-24"
        value={value}
        onChange={OnTextChange}
        placeholder={placeholder}
      />
      <FaSearch
        size={24}
        className="absolute right-0 top-0 h-full flex justify-center items-center text-primary mx-8"
      />
    </div>
  );
};
