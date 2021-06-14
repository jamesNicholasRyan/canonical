import React from 'react'
import { Card } from '@canonical/react-components'

export default function Cards({ blogPostData }) {

  console.log(blogPostData)

  function mapCards() {
    return <div className = "row">
        {blogPostData.map((post, index) => {
          const image = post.featured_media ? post.featured_media : 'https://assets.ubuntu.com/v1/7de55930-canonical-logo1.png'
          const altText = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].alt_text : 'no alt text available'
          const date = new Date(post.date).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric'})
          let title = post.title.rendered
          if (title.length > 47) title = title.substring(0, 47) + ' ...'

          return <Card
              className = "col-4"
              key={index}
              // title={post.title.rendered}
              // thumbnail={image ? image : 'image not available'}
              highlighted
            >
              {/* {console.log(post._embedded['wp:featuredmedia'].[0].source_url)} */}
              <p className="p-muted-heading--6">CLOUD AND SERVER</p>
              <hr></hr>
              <img src={image} alt={altText}></img>
              <p className="p-heading--3 blog-title" style={{'font-weight': '500'}}><a href={post.link}>{title}</a></p>
              <p className="p-heading--5"><i>By <a href={post._embedded.author[0].link}>{post._embedded.author[0].name}</a> on {date}</i></p>
              <hr></hr>
              <p>Article</p>
            </Card>
        })}
    </div>
  }

  if (blogPostData.length < 1) return <div></div>

  return <div>
      {mapCards()}
    </div>
}