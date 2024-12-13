// components/InputSearch.tsx
import React from 'react';

interface InputSearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search users..."
      className="px-4 py-2 border rounded-md w-full"
    />
  );
};

export default InputSearch;
