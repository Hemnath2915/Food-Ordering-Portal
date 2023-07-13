import React from 'react'
import ImageColumn from './ImageColumn'
import Slideshow from './imagesliders'
import Register from './register'

export default function Home() {
  return (
    <div>
        <Slideshow/>
        <ImageColumn/>
        {/* <Register/>  */}
    </div>
  )
}
