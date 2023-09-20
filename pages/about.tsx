import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { MainLayouts } from '../components/layouts/MainLayouts';
import { DarckLayout } from '../components/layouts/DarckLayout'

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage() {
  return (
      <>
        <h1>About Page</h1>        
        <h1 className={styles.title}>
          Ir a{' '}
          <Link href="/">
            Home
          </Link>
        </h1>
      </>
  );
}

AboutPage.getLayout = function getLayout( page: JSX.Element ){
  return(
    <MainLayouts name='About Page'>
      <DarckLayout>
        { page }
      </DarckLayout>
    </MainLayouts>
  )
}
