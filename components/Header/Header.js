import React from "react"
import "./Header.module.scss"
import Link from "next/link"

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Jonathan Clark</h1>
      </Link>
      <h2>Site under construction</h2>
    </header>
  )
}
