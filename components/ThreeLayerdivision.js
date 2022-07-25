export default function ThreeLayerdivision() {
  return (
    <div className='rounded-md bg-white border-gray-200 p-2.5'>
      <div className='flex items-center'>
        <div>
          <img
            src='https://res.cloudinary.com/dpxs9ause/image/upload/v1658412846/ea-kazi/jelurida_lw9ukr.png'
            alt='logo'
          />
        </div>

        <div className='flex flex-col flex-1'>
          <h3 className='text-[10px]'>Google</h3>
          <h4 className='text-sm font-bold'>Visual Designer - UI Designer</h4>
          <p className='text-xs text-stone-400'>Mwanza, Tanzania</p>
        </div>

        <div>
          <div className='text-xs text-stone-300'>3hrs ago .</div>
        </div>
      </div>
    </div>
  );
}
