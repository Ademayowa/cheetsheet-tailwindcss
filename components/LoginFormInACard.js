import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsChevronDown } from 'react-icons/bs';

export default function Register() {
  return (
    <Layout title='Register'>
      <div className='flex justify-center text-center mt-10 mx-auto mb-10'>
        <div className='py-8 px-10 rounded-lg shadow-lg w-11/12 md:w-6/12 lg:w-4/12 bg-white mt-5'>
          <Link href='/'>
            <img
              src={'/logo1.png'}
              alt='logo'
              className='mx-auto cursor-pointer'
            />
          </Link>
          <h5 className='text-[28px] mt-4 font-bold mb-2'>Sign up</h5>

          <div className='mt-4 md:mt-6'>
            <input
              className='pl-3 text-base border border-solid border-gray-300 placeholder-gray-600
              rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
              type='text'
              placeholder='Full Name'
            />
          </div>

          <div className='mt-4 md:mt-6'>
            <input
              className='pl-3 text-base border border-solid border-gray-300 placeholder-gray-600
              rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
              type='email'
              placeholder='Email Address'
            />
          </div>

          {/* Select dropdown */}
          <div className='mt-4 md:mt-6'>
            <div className='relative'>
              <BsChevronDown className='absolute top-3 md:top-3 right-2 w-5 h-5 text-[#817C8E]' />
            </div>
            <select
              className='form-select form-select-lg mb-3 appearance-none block w-full h-12 px-6 pl-3 py-2 text-base font-normal text-gray-600 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-stone-500 focus:outline-none'
              aria-label='.form-select-lg'
            >
              <option>Select</option>
              <option>Start</option>
            </select>
          </div>

          <div className='mt-4 md:mt-6'>
            <input
              className='pl-3 text-base border border-solid border-gray-300 placeholder-gray-600
              rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none bg-[
              #EEF4FF]'
              type='password'
              placeholder='Password'
            />
          </div>

          <button
            className='bg-[#4086F4] shadow-lg w-full text-white px-14 py-3 mt-2 md:mt-4 rounded transition duration-1000 ease-in-out
            hover:bg-[#2a70ae] transform hover:scale-120'
          >
            Create an account
          </button>

          <div className='mt-4 text-gray-500'>
            Already have an account?{' '}
            <Link href='#'>
              <a className='text-blue-500'> Sign In</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
