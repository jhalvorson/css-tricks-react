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
        <div className="github-logo">
          <a href="https://github.com/jhalvorson/css-tricks-react" target="_blank">
            <svg version="1.1"
            	 x="0px" y="0px" width="32.6px" height="31.8px" viewBox="0 0 32.6 31.8" enable-background="new 0 0 32.6 31.8"
            	 >
            <defs>
            </defs>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5
            	c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1
            	c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4
            	C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7
            	c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5
            	c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z"/>
            </svg>
          </a>

        </div>
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
            --color-indigo: #5C6BC0;
            --color-grey-blue: #78909C;
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
            flex-direction: row;
            padding: 0px;
            align-items: center;
            background-color: var(--color-indigo);
            padding: 15px;
          }

          .navbar-brand {

          }

          nav ul {
            display: flex;
            padding: 20px 0 20px 30px;
          }

          nav ul li {
           padding: 0 15px;
          }

          nav ul li a {
            color: var(--color-white);
            text-decoration: none;
          }

          svg {
            width: 25px;
          }

          .github-logo {
            position: absolute;
            right: 30px;
          }

          @media(max-width: 600px) {

            nav {
              flex-direction: column;
              align-items: flex-start;
              padding: 0;
            }

            .navbar-brand {
              margin-top:30px;
              margin-left: 20px;
            }

            .github-logo {
              top: 20px;
            }

            nav ul {
              width:100%;
              margin-top: 30px;
              background-color: #4c59a1;
              padding: 20px 0;
            }
          }


        `}
        </style>
      </nav>
    )
  }
}
