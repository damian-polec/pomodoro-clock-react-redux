import React from 'react';
import ControlBox from '../ControlBox/ControlBox';

import './Modal.scss'

const modal = (props) => {
  return (
    <div className={props.show ? ['modal', 'Open'].join(' ') : ['modal', 'Close'].join(' ')}>
      <ControlBox
        id='break-label' 
        label='Break Length' 
        time={props.breakTime}
        onDecrement={props.decrementHandler}
        onIncrement={props.incrementHandler}/>
      <ControlBox
        id='session-label' 
        label='Session Length' 
        time={props.sessionTime}
        onDecrement={props.decrementHandler}
        onIncrement={props.incrementHandler}/>
    </div>
  )
}

export default modal;