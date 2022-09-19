import ButtonInsideForm from '@/components/ButtonInsideForm';
import Layout from '@/components/Layout';
import ThreeLayerdivision from '@/components/ThreeLayerdivision';
import LoginFormInACard from '@/components/LoginFormInACard';
import SearchIconInForm from '@/components/SearchIconInForm';

export default function Home() {
  return (
    <Layout title='Gradient on images'>
      <div className='text-center mt-10'>
        <h1 className='text-5xl'>My Tailwind cheetsheet in Next.js</h1>
        {/* <ButtonInsideForm /> */}
        {/* <ThreeLayerdivision />
        <LoginFormInACard /> */}
        <SearchIconInForm />
      </div>
    </Layout>
  );
}
