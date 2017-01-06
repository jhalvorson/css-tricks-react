import React, { Component } from 'react'
import Link from 'next/link'


export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/posts"><a>Posts</a></Link></li>
        </ul>
        <style jsx>
        {`
          nav {
            display: flex;
            padding: 0px;
            align-items: flex-start;
            background-color: var(--color-orange);
          }

          ul {
            display: flex;
            padding: 20px;
          }

          li {
           padding: 0 15px;
          }

          li a {
            color: var(--color-dark-grey);
            text-decoration: none;
            color: var(--color-white);
          }

        `}
        </style>
      </nav>
    )
  }
}
