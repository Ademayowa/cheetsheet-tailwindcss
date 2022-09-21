export default function Register() {
  return (
    <div className='block p-6 rounded-lg shadow-lg bg-white max-w-md'>
      <form>
        <div className='grid grid-cols-2 gap-4'>
          <div className='form-group mb-6'>
            <label
              for='firstname'
              className='form-label inline-block mb-2 text-[#1A202C]'
            >
              First Name
            </label>

            <input
              type='text'
              className='form-control block w-full px-3 py-1.5 h-12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
            />
          </div>

          <div className='form-group mb-6'>
            <label
              for='lastname'
              className='form-label inline-block mb-2 text-[#1A202C]'
            >
              Last Name
            </label>

            <input
              type='text'
              className='form-control block w-full px-3 py-1.5 h-12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
            />
          </div>
        </div>

        <div className='form-group mb-6'>
          <label
            for='email'
            className='form-label inline-block mb-2 text-[#1A202C]'
          >
            Email address
          </label>
          <input
            type='email'
            className='form-control block w-full px-3 py-1.5 h-12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
          />
        </div>

        <div className='form-group mb-6'>
          <textarea
            className='form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 last:bg-whitebg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
            rows='5'
            placeholder='Message'
          ></textarea>
        </div>

        <button
          type='submit'
          className='w-full px-6 py-3 h-12 bg-[#EC3335] text-white inline-block  border-red-600 font-medium text-[15px] leading-tight rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
