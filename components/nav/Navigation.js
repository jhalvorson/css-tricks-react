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
          <li><Link href="/snippets"><a>Snippets</a></Link></li>
        </ul>
        <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Muli');

          /* Reset */

          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed,
          figure, figcaption, footer, header, hgroup,
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          /* HTML5 display-role reset for older browsers */
          article, aside, details, figcaption, figure,
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          body {
            line-height: 1;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
          }
          blockquote:before, blockquote:after,
          q:before, q:after {
            content: '';
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          /* Styles */

          :root {
            /*--color-orange: #ee8c25;*/
            --color-orange: #FFA726;
            --color-white: #FFFFFF;
            --color-grey: #f8f6f6;
            --color-dark-grey: #222222;
            --color-links: #7db1ef;

            --color-amber: #FFCA28;
          }

          body {
            margin: 0;
            font-family: 'Muli', sans-serif;
            color: var(--color-dark-grey);
            font-size: 16px;
          }

          .ff-app {
            background-color: var(--color-grey);
          }

          .container {
            width: 100%;
            max-width: 970px;
            margin: 0 auto;
          }

          * {
            box-sizing: border-box;
          }

          h1 {

          }

          h2 {
              font-size: 1.8rem;
          }

          h3 {
            font-size: 1.4rem;
          }

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
