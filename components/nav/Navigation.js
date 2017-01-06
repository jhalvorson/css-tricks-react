import React, { Component } from 'react'
import Link from 'next/link'


export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="navbar-brand">
          <Link href="/">
            <img src="/static/logo-white.svg" alt="CSS Tricks Logo"/>
          </Link>
        </div>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/posts"><a>Posts</a></Link></li>
        </ul>
        <style jsx>
        {`
          nav {
            display: flex;
            padding: 0px;
            align-items: center;
            background-color: var(--color-orange);
            padding: 15px;
          }

          .navbar-brand {

          }

          ul {
            display: flex;
            padding: 20px 0 20px 30px;
          }

          li {
           padding: 0 15px;
          }

          li a {
            color: var(--color-white);
            text-decoration: none;
          }

        `}
        </style>
      </nav>
    )
  }
}
