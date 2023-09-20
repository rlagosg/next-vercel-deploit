import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { MainLayouts } from '../components/layouts/MainLayouts';

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage() {
  return (
    <MainLayouts name='Contact Page'>
      <h1>Contact Page</h1>        
        <h1 className={styles.title}>
          Ir a{' '}
          <Link href="/">
            Home
          </Link>
        </h1>
        <h1 className={styles.title}>
          Ir a{' '}
          <Link href="/about">
            About
          </Link>
        </h1>
    </MainLayouts>
  );
}
