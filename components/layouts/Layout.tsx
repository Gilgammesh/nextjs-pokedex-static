import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/ui';

interface ILayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Carlos Santander" />
        <meta name="description" content={`Información sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main className="py-0 px-10">{children}</main>
    </>
  );
};

export default Layout;
