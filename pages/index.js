import Layout from '@/components/Layout';
import TwoLayerLogin from '@/components/TwoLayerLogin';

export default function Home() {
  return (
    <Layout>
      <div className='text-center mt-10'>
        <h1 className='text-5xl'>My Tailwind cheetsheet in Next.js</h1>
      </div>

      <TwoLayerLogin />
    </Layout>
  );
}
