import React, { Component } from 'react'
import Navigation from '../components/nav/Navigation'
import Link from 'next/link'
require('es6-promise').polyfill()
require('fetch-everywhere')
import Styles from '../styles/base'

export default class App extends Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const url = 'https://css-tricks.com/wp-json/wp/v2/'

    const getPosts = await fetch(`${url}posts?per_page=20`)
    const posts = await getPosts.json()
    return { posts }
  }
  render() {
    return (
      <main>
        <Navigation />
        <div className="notification">
          <p>Testing</p>
        </div>
        <div className="main-posts">
          {
            this.props.posts.map((data, index) =>
            <li key={`class-${data.id}`} i={index}>
              <Link href={`/post?slug=${data.slug}`} as={`/post/${data.slug}`}>Link!</Link>
              <a dangerouslySetInnerHTML={{__html:data.title.rendered}} />
            </li>
            )
          }
        </div>
        <style jsx>
          {`
            .main-posts {
              background-color: var(--color-white);
              max-width: 820px;
              display: flex;
              flex-direction: column;
              margin: 80px auto;
            }

            li {
              display: flex;
              margin: 15px 0;
            }

          `}
        </style>

        <style jsx global>
        {`
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
            --color-orange: #ee8c25;
            --color-white: #FFFFFF;
            --color-grey: #f8f6f6;
            --color-dark-grey: #222222;
            --color-links: #7db1ef;
          }

          body {
            margin: 0;
            font-family: sans-serif;
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

        `}
        </style>
      </main>
    )
  }
}
