import React, { Component } from 'react'
import Link from 'next/link'

export default class Notifcation extends Component {

  render() {
    return (
      <div className="alert">
        <p>Hey, thanks for checking out my little experiment!</p>
        <p><strong>This is obviously not the real CSS Tricks, that''s over <a href="https://css-tricks.com" target="_blank">here.</a></strong></p>
        <button className="close" onClick={() => this.props.closeNotification()}>Got it</button>
        <style jsx>
          {`
            .alert {
              width: 100%;
              background-color: var(--color-grey);
              display: block;
              margin: -30px auto 40px auto;
              padding: 40px;
              text-align: center;
            }

            .alert p {
              font-size: 1rem;
              line-height: 1.6;
            }

            .alert button {
              background: var(--color-indigo);
              border: none;
              box-shadow: none;
              border-radius: 2px;
              padding: 10px 29px;
              font-size: 1rem;
              font-family: inherit;
              color: var(--color-white);
              margin-top:30px;
            }

            a {
              color: var(--color-indigo);
              text-decoration: none;
              font-weight: 600;
            }
          `}
        </style>
      </div>
    )
  }
}
