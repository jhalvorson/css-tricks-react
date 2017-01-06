import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <p>Loading ✌🏻</p>
        <style>
          {`
            .loader {
              width: 100%;
              padding: 30px;
              text-align: center;
              font-size: 1.3rem;
            }
          `}
        </style>
      </div>
    )
  }
}
