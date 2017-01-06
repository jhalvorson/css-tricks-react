import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="column one">
          <p>Side project of <a href="https://halvorson.co.uk">Jamie Halvorson</a></p>
          <p>Built using React &amp; the WP-API</p>
        </div>
        <style>
        {`
          footer {
            text-align: center;
            padding: 30px;
            background-color: #F9F9F9;
          }

          footer p {
            padding: 6px;
          }
        `}
        </style>
      </footer>
    )
  }
}
