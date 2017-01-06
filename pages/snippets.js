import React, { Component } from 'react'
import Navigation from '../components/nav/Navigation'

export default class Snippets extends Component {
  render() {
    return (
      <div>
      <Navigation />
        <h1>Snippets ain't ready yet. Come back l8r.</h1>

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
