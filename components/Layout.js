import Head from "next/head"

import Link from "next/link"
import SideBar from "./SideBar/SideBar"
import GoogleFonts from "next-google-fonts"
import ContentArea from "./ContentArea/ContentArea"

export const siteTitle = "JonnyBoyDev Portfolio and Blog"

export default function Layout({ children }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" />

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal portfolio and blog of Jonny C"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <SideBar />
      <main>{children}</main>
    </>
  )
}
