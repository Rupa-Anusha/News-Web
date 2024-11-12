import React from 'react'
import Spinner from './Spinner.gif'

export default function loading() {
  return (
    <div className='text-center'>
      <img src={Spinner} alt=" "></img>
    </div>
  )
}
