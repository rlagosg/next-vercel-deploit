import React, { FC, PropsWithChildren } from 'react'
import styles from './MainLayouts.module.css'
import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { type } from 'os';


type MainLayoutProps = {
  children: React.ReactNode; // Puedes usar React.ReactNode para cualquier tipo de children
  name: string;
};

export const MainLayouts: FC<MainLayoutProps>  =({ children , name = 'hello'}) => {
    return (
        <>
          <Head>
            <title> { name }</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>

            { children }
            
          </main>
        </>
      );
}
