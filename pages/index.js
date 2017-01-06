import React, { Component } from 'react'
import Navigation from '../components/nav/Navigation'
import Notification from '../components/notification/Notification'
import PostPreview from '../components/posts/PostPreview'
import Footer from '../components/footer/Footer'
import Loader from '../components/posts/Loader'

import Link from 'next/link'
require('es6-promise').polyfill()
import fetch from 'fetch-everywhere'
import Styles from '../styles/base'

import WPAPI from 'wpapi'
var wp = new WPAPI({ endpoint: 'https://css-tricks.com/wp-json/' });

export default class App extends Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    // const url = 'https://css-tricks.com/wp-json/wp/v2/'
    // const getPosts = await fetch(`${url}posts?per_page=20&page=1`)
    // let posts = await getPosts.json()
    // return { posts }
  }

  constructor() {
    super()

    this.loadMore  = this.loadMore.bind(this)

    this.state = {
      notification: true,
      page: 0,
      loadingPosts: false,
      posts: []
    }
  }

  componentDidMount() {
    this.loadMore()
  }

  closeNotification() {
    //this will set the state to false when the notification
    //butto is pressed, which will in turn hide the notification
    this.setState({
      notification: false
    })
  }

  loadMore() {

    this.setState({
      loadingPosts: true
    })
    //This seems really messy, will get it running but needs to be reviewed @REVIEW
    wp.posts().page(this.state.page + 1).perPage(20).offset(this.state.posts.length).embed().then((posts) => {
      this.setState({
        loadingPosts: false,
        page: this.state.page + 1,
        posts: this.state.posts.concat(posts) //@NOTE: must be a better way..
      })
    })

  }

  render() {
    return (
      <main>
        <Navigation />

        <div className="main-posts">

          { //check state on notification
            this.state.notification ?
            <Notification
                closeNotification={() => this.closeNotification()}
               />
             :
             null
          }



          { //let's add a simple loader
            this.state.loadingPosts ?
            <Loader />
            :
            null
          }

          { //loop through the new posts called from loadMore()
            this.state.posts ?
            this.state.posts.map((data, index) =>
            <li key={`class-${data.id}`} i={index}>
              <PostPreview
                data={data}
               />
            </li>
            )
            :
            null
          }

          <button className="load-more" onClick={() => this.loadMore()}>Load More</button>

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

            .load-more {
              display: inline-block;
              width: auto;
              background-color: var(--color-indigo);
              color: var(--color-white);
              padding: 10px 28px;
              font-size: .9rem;
              font-family: inherit;
              border: none;
              box-shadow: none;
              border-radius: 3px;
              margin: 40px auto;
            }

            li {
              display: flex;
              margin: 15px 0;
            }

          `}
        </style>
        <Footer />
      </main>
    )
  }
}
