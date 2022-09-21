import Layout from '@/components/Layout';
import SearchIconInForm from '@/components/SearchIconInForm';
import SelectDropdown from '@/components/SelectDropdown';
import LoginFormInACard from '@/components/LoginFormInACard';

export default function Home() {
  return (
    <Layout title='Gradient on images'>
      <div className='text-center mt-10'>
        <h1 className='text-5xl'>My Tailwind cheetsheet in Next.js</h1>
        <SelectDropdown />
      </div>
    </Layout>
  );
}
