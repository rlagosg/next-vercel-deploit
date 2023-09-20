import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

import { MainLayouts } from '../components/layouts/MainLayouts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (

    <MainLayouts name='Home Page'>
      <h1>Home Page</h1>        
        <h1 className={styles.title}>          
          Ir a{' '}
          <Link href="/about">            
            About
          </Link>
        </h1>
    </MainLayouts>
    
    
  );
}
