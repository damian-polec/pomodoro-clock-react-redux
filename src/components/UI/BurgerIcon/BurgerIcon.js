import React from 'react';

import './BurgerIcon.scss'

const burgerIcon = (props) => {
  return (
    <div onClick={props.click}className='BurgerIcon'>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default burgerIcon;