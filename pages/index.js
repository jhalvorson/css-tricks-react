import React, { Component } from 'react'
import Navigation from '../components/nav/Navigation'
import Notification from '../components/notification/Notification'
import PostPreview from '../components/posts/PostPreview'
import Link from 'next/link'
require('es6-promise').polyfill()
import fetch from 'fetch-everywhere'
import Styles from '../styles/base'

export default class App extends Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const url = 'https://css-tricks.com/wp-json/wp/v2/'
    const getPosts = await fetch(`${url}posts?per_page=20`)
    const posts = await getPosts.json()
    return { posts }
  }

  constructor() {
    super()

    this.state = {
      notification: true
    }
  }

  closeNotification() {
    //this will set the state to false when the notification
    //butto is pressed, which will in turn hide the notification
    this.setState({
      notification: false
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

          { //lets map over the posts fetched from the api
            this.props.posts.map((data, index) =>
            <li key={`class-${data.id}`} i={index}>
              <PostPreview
                data={data}
               />
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
      </main>
    )
  }
}
