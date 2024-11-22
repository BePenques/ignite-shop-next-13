'use client'
import React from 'react';

import { Roboto } from 'next/font/google'
import { globalStyles } from "@/styles/global";
import logoImg from '../assets/logo.svg'
import { StyledContainer, StyledHeader } from "@/styles/pages/app";

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog';
import SideDrawer from "@/app/components/SideDrawer";
import OpenCartButton from './components/OpenCartButton';
import { useRouter } from 'next/navigation';

globalStyles();

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();

  const redirectHome = () => {
    router.push('/');
  };

  return (
    <html lang="en">
       <head>
      </head>
      <body className={roboto.className}>
        <Dialog.Root>
          <StyledContainer>
              <StyledHeader>
                <a onClick={redirectHome}>
                  <Image src={logoImg} alt="" />
                </a>
                <OpenCartButton/>
              </StyledHeader>
              <SideDrawer />           
              {children}
          </StyledContainer>
        </Dialog.Root>
      </body>  
    </html>
  );
}
