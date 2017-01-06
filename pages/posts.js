import React, { Component } from 'react'
import Navigation from '../components/nav/Navigation'

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>Not built this bit yet. Go away.</h1>

      <style jsx>
        {`
          h1 {
            text-align: center;
            padding: 30px;
            font-size: 2rem;
            font-weight: 600;
          }
        `}
      </style>
      </div>
    )
  }
}
