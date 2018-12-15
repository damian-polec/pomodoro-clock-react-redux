import React from 'react';

import Label from '../UI/Label/Label'
import Controls from './Controls/Controls';

import './ControlBox.scss';

const controlBox = (props) => {
  return (
    <div className='controlBox'>
      <Label id={props.id}>{props.label}</Label>
      <Controls 
        time={props.time}
        decrementId={props.id === 'session-label' ? 'session-decrement' : 'break-decrement'}
        incrementId={props.id === 'session-label' ? 'session-increment' : 'break-increment'}
        lengthId={props.id === 'session-label' ? 'session-length' : 'break-length'}
        decrement={props.onDecrement}
        increment={props.onIncrement}/>
    </div>
  )
}

export default controlBox;