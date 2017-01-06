import React, { Component } from 'react'
import Navigation from '../components/nav/Navigation'
require('es6-promise').polyfill()
import fetch from 'fetch-everywhere'

export default class Post extends Component {
  static async getInitialProps ({ query: { slug } }) {

    const getPost = await fetch(`https://css-tricks.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    const thisPost = await getPost.json()
    return { slug, thisPost }
  }
  render() {
    const post = this.props.thisPost[0];
    console.log(post);
    return (
      <main>
        <Navigation />
        <header className="post-header">
          <div className="author-box">
            <img src={post._embedded.author[0].avatar_urls[96]} alt={`${post._embedded.author[0].name}'s profile picture`}/>
            <p>{post._embedded.author[0].name}</p>
          </div>
          <h1 className="post-title" dangerouslySetInnerHTML={{__html: post.title.rendered}}/>

        </header>
        <section className="content">
        <p dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </section>
        <style>
        {`
          .post-title {
            font-size: 3rem;
            font-weight: 600;
            padding-top: 30px;
          }

          .post-header {
            text-align: center;
            padding: 60px;
          }

          .author-box img {
            border-radius: 50%;
            width:60px;
          }

          .author-box p {
            line-height: auto;
            font-size: 1.3rem;
            padding-top: .6rem;
            color: var(--color-grey-blue);
          }

          .content {
            max-width: 840px;
            margin: 40px auto;
            width: auto;
          }

          .content p {
            line-height: 1.4;
            padding: 8px 0;
          }

          .content img {
            max-width: 80%;
            display: block;
            margin: 30px auto;
          }

          h3 {
            font-weight: 600;
            color: var(--color-grey-blue);
          }

          a {
            color: var(--color-indigo);
            font-weight: 600;
            text-decoration: none;
          }

          code {
            background-color: var(--color-grey);
            padding: 5px;
            font-family: monospace;
            border-radius: 2px;
          }

          .codepen {
            background-color: var(--color-indigo);
            padding: 23px;
            border-radius: 3px;
            margin: 20px 0;
            color:#fff;
          }

          .codepen a {
            color: #fff;
          }
        `}
        </style>
      </main>
    )
  }
}
