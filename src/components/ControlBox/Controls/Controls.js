import React from 'react';
import Button from '../../UI/Button/Button';

const controls = (props) => {
  return (
    <div className='controls'>
        <Button 
          id={props.decrementId} 
          icon={['far', 'arrow-alt-circle-down']}
          click={props.decrement} />
        <p id={props.lengthId}>{props.time}</p>
        <Button 
          id={props.incrementId} 
          icon={['far', 'arrow-alt-circle-up']}
          click={props.increment} />
    </div>
  )
}

export default controls;