import type { Metadata } from "next";
// import localFont from "next/font/local";

import { Roboto } from 'next/font/google'
import { getCssText } from "@/styles";
import { globalStyles } from "@/styles/global";
import logoImg from '../assets/logo.svg'
import { Container, Header } from "@/styles/pages/app";

import Image from 'next/image'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

// const roboto = localFont({
//   src: "./fonts/Roboto-Regular.ttf",
//   variable: "--font-roboto",
//   weight: "400",
// });

// const robotoBold = localFont({
//   src: "./fonts/Roboto-Bold.ttf",
//   variable: "--font-roboto-bold",
//   weight: "700",
// });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  globalStyles();
  
  return (
    <html lang="en">
       <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }} // Injeta o CSS do Stitches
        />
      </head>
      <body className={roboto.className}>
       <Container>
        <Header>
          <Image src={logoImg} alt="" />
        </Header>
       </Container>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
        {children}
      </body>
    </html>
  );
}
