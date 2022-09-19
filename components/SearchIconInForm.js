import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function SearchIconInForm() {
  return (
    <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
      <BsSearch className='h-5 w-5' />
      <input
        type='text'
        placeholder='Search Twitter'
        className='flex-1 bg-transparent outline-none'
      />
    </div>
  );
}
