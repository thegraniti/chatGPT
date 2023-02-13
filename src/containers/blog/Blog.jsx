import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

function Blog() {
  return (
    <div className='blog section-padding' id='blog'>
      <div className='blog-heading'>
        <h1 className='gradient-text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='blog-container'>
        <div className='blog-container-groupA'>
          <Article imageUrl={blog01} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
        <div className='blog-container-groupB'>
          <Article imageUrl={blog02} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageUrl={blog03} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageUrl={blog04} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageUrl={blog05} data="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog