import React, { Component } from 'react'

export default class Notifcation extends Component {

  render() {
    return (
      <div className="alert">
        <p>Hey, thanks for checking out my little experiment!</p>
        <p><strong>This is obviously not the real CSS Tricks, that''s over here.</strong></p>
        <button className="close" onClick={() => this.props.closeNotification()}>Got it</button>
        <style jsx>
          {`
            .alert {
              width: 100%;
              background-color: var(--color-grey);
              display: block;
              margin: 40px auto;
              padding: 40px;
              text-align: center;
            }
          `}
        </style>
      </div>
    )
  }
}
