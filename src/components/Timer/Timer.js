import React from 'react';
import Label from '../UI/Label/Label';
import Button from '../UI/Button/Button';
import { numTransform } from '../../helpers/helpers';
import alarm from '../../assets/sounds/alarm.mp3';

import './Timer.scss'

const timer = (props) => {
  return (
    <React.Fragment>
      <div className='Timer-Wrapper'>
        <div className='Timer'>
          {props.isSessionInitialized 
            ? <React.Fragment>
                <Label id={props.label}>Session</Label>
                <p id='time-left'>{numTransform(props.sessionTimer)}</p>
              </React.Fragment>
            : <React.Fragment>
                <Label id={props.label}>Break</Label>
                <p id='time-left'>{numTransform(props.breakTimer)}</p>
              </React.Fragment>
            }
          <audio id='beep' src={alarm} type='audio/mpeg' />  
        </div>
      </div>
      <div className='buttons'>
        {!props.isPlaying ? <Button id='start_stop' click={props.start} icon={['far', 'play-circle']} />
                   : <Button id='start_stop' click={props.stop} icon={['far', 'pause-circle']} />}
        <Button id='reset' click={props.reset} icon='redo' />
      </div>
    </React.Fragment>
    
  )
}

export default timer;