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
        <header>
          <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
          {post._embedded.author[0].name}
          <img src={post._embedded.author[0].avatar_urls[96]} alt={`${post._embedded.author[0].name}'s profile picture`}/>

        </header>
        <section className="content">
        <p dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </section>
      </main>
    )
  }
}
