import React from 'react'
import './article.css'


function Article(props) {
  return (
    <div className='article'>
      <div className='article-img'>
        <img src={props.imageUrl} alt="blog" />
      </div>
      <div className='article-content'>
        <div>
        <p>{props.date}</p>
        <h3>{props.title}</h3>
        </div>
      <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article