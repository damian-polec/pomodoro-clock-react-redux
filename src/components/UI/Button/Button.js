import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

const button = (props) => {
  return (
    <button 
      id={props.id} 
      className='Button'
      onClick={props.click}><FontAwesomeIcon icon={props.icon} /></button>
  )
}

export default button;