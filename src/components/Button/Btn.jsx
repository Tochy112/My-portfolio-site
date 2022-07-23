import React from 'react'
import './Btn.css'

const Btn = ({content}) => {
  return (
    <div>
       <button className='btn'>{content}</button>
    </div>
  )
}

export default Btn