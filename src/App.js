import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'


function App() {
  const [ blogPostData, setBlogPostData ] = useState([])

  useEffect(() => {
    axios.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts?_embed.json')
      .then(resp => {
        setBlogPostData(resp.data)
      })
  }, [])
    
  // console.log(blogPostData)

  return <div className="section">
      <div className="container">
        Canonical Test... 
        <Cards
          blogPostData={blogPostData}
        />

      </div>
    </div>
}

export default App;
