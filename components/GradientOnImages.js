import Layout from '@/components/Layout';

export default function GradientOnImages() {
  return (
    <Layout title='Gradient on images'>
      <div>
        <div className='bg-gradient-to-tl from-purple-900 to-green-700 h-96 w-full relative'>
          <img
            src={'/images/excercise1.jpg'}
            alt='woman'
            className='w-full h-full object-cover absolute mix-blend-overlay'
          />
          <div className='pt-10 px-10 md:px-12 text-center'>
            <h1 className='text-[32px]  font-semibold text-white'>
              Get paid to stay fit
            </h1>
            <p className='font-normal  text-[#B6B6B6]'>
              Get rewarded with tokens after completing your fitness milestones.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
