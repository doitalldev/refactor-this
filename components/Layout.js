import Head from "next/head"
import styles from "./layout.module.scss"
import utilStyles from "../styles/utils.module.scss"
import Link from "next/link"
import SideBar from "../components/SideBar/SideBar.js"
import GoogleFonts from "next-google-fonts"
import ContentArea from "../components/ContentArea/ContentArea.js"

export const siteTitle = "JonnyBoyDev Portfolio and Blog"

export default function Layout({ children, home }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400&display=swap" />

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <SideBar />
        <ContentArea />

        {children}
      </main>
    </>
  )
}
