import React, { Component } from 'react'
import Navigation from '../components/nav/Navigation'

export default class Post extends Component {
  static async getInitialProps ({ query: { slug } }) {

    const getPost = await fetch(`https://css-tricks.com/wp-json/wp/v2/posts?slug=${slug}`)
    const thisPost = await getPost.json()
    return { slug, thisPost }
  }
  render() {
    const post = this.props.thisPost[0];
    console.log(post);
    return (
      <main>
        <Navigation />
        <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
        <section className="content">
        <p dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </section>
      </main>
    )
  }
}
