import { MdKeyboardArrowDown } from 'react-icons/md';

export default function SelectDropdown() {
  return (
    <div className='flex md:ml-4 px-4 md:px-0'>
      <div className='mb-3 w-full md:w-2/3 xl:w-96 px-4 py-8 bg-white shadow-lg rounded-md'>
        <div className='relative'>
          <MdKeyboardArrowDown className='absolute top-10 md:top-12 right-2 w-5 h-5 text-[#817C8E]' />
        </div>

        <label className='text-lg md:text-2xl mb-1'>Select Asset</label>
        <select
          className='form-select form-select-lg mb-3 appearance-none block  w-full h-12 px-6 pl-3 text-[18px] font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none'
          aria-label='.form-select-lg example'
        >
          <option selected>Select asset</option>
          <option value='1'>NGN</option>
        </select>

        <button
          className='bg-black shadow-lg w-full text-white px-14 py-3 rounded-md transition duration-1000 ease-in-out
         hover:text-redColor transform hover:scale-120'
        >
          Next
        </button>
      </div>
    </div>
  );
}
