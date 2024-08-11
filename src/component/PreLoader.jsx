import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animation'
const PreLoader = () => {

  useEffect(()=>{
    preLoaderAnim()
  },[]);

  return (
    <div className='preloader'>
      <div className='text-container'>
      <span><img className='cats' src='/images/cat1.svg'></img></span>
      <span><img className='cats' src='/images/cat2.svg'></img></span>
      <span><img className='cats' src='/images/cat3.svg'></img></span>
      </div>

    </div>
  )
}

export default PreLoader
