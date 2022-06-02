import Head from 'next/head';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name={keywords} content='keywords' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: 'Tailwind cheetsheet',
  description: 'My tailwind cheetsheet for next.js',
};
