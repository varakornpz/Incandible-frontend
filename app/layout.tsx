import type { Metadata } from "next";
import {IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable : "--font-ibm-plex-sans" ,
  subsets : ["latin"]
})

import { UserProvider } from "./providers/UserData";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Incanedible",
  description: "Cane with shitty feature.",
  metadataBase : new URL("https://incanedible.varakorn.net") ,
  openGraph : {
    title : "Incanedible" ,
    description : "website for incanedible" ,
    url : "incanedible.varakorn.net" ,
    siteName : "varakorn.net" ,
    images : [
      {
        url : "/opengraph-image.png",
        width : 1200,
        height : 630 ,
        alt : "incanedible"
      }
    ],
    locale : "th_TH" ,
    type : "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} antialiased min-h-screen w-full`}>
      <UserProvider>
        <Navbar/>
        {children}
        <ToastContainer />
      </UserProvider>
      </body>
    </html>
  );
}
