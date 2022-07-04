export default function ButtonInsideForm() {
  return (
    <div>
      <div className='container flex items-center w-full lg:w-9/12 '>
        <div className='relative grow'>
          <input
            className='block pl-9 sm:text-sm border-gray-300 rounded-full h-14 w-full shadow-lg font-bold text-grayColor outline-none mb-3 md:mb-0 focus:shadow focus:outline-none'
            type='text'
            placeholder='Enter email address'
          />

          <div className='absolute top-0 right-0'>
            <button className='bg-[#BA4270] text-white text-[15px] font-bold py-3 px-6 rounded-full w-full md:w-auto shadow-lg h-14'>
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
