import React, { Component } from 'react'
import Link from 'next/link'

export default class PostPreview extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Link href={`/post?slug=${data.slug}`} as={`/post/${data.slug}`}>
          <a dangerouslySetInnerHTML={{__html:data.title.rendered}} />
        </Link>
        <style jsx>
        {`
          a {
            color: var(--color-dark-grey)
          }
        `}
        </style>
      </div>
    )
  }
}
