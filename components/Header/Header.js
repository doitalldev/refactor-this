import React from "react"
// import styles from "./Header.module.scss"

const Header = ({ title, tagline }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{tagline}</h2>
    </header>
  )
}

export default Header
