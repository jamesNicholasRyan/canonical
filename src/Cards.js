import React from 'react'
import { Card as div } from '@canonical/react-components'

export default function Cards({ blogPostData }) {

  function mapCards() {
    return <div className = "row">
        {blogPostData.map((post, index) => {
          const image = post.featured_media ? post.featured_media : 'https://assets.ubuntu.com/v1/7de55930-canonical-logo1.png'
          const altText = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].alt_text : 'no alt text available'
          const date = new Date(post.date).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric'})
          let title = post.title.rendered
          if (title.length > 47) title = title.substring(0, 47) + ' ...'

          return <div className = "col-4 p-card" key={index} >
              <header className="p-card_header">
                <p className="p-muted-heading">CLOUD AND SERVER</p>
                <hr></hr>
              </header>

              <div className="p-card_content">
                <a href={post.link}>
                  <img src={image} alt={altText}></img>
                </a>
                <p className="p-heading--3 blog-title" style={{'font-weight': '300'}}>
                  <a href={post.link}>{title}</a>
                </p>
                <p className="p-heading--5 author" style={{'font-weight': '300'}}>
                  <i>By <a href={post._embedded.author[0].link}>{post._embedded.author[0].name}</a> on {date}</i>
                </p>
              </div>
              
              <div className="p-card_footer">
                <hr></hr>
                <p>Article</p>
              </div>
              
            </div>
        })}
    </div>
  }

  if (blogPostData.length < 1) return <div></div>

  return <div>
      {mapCards()}
    </div>
}