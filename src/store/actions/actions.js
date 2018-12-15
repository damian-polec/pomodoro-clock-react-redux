import * as actionTypes from './actionTypes';
import { numTransform, timerCounter } from '../../helpers/helpers';

export const SHOW_MODAL = () => {
  return {
    type: actionTypes.SHOW_MODAL_BUTTON
  }
}

export const RESET_TIMER = () => {
  return {
    type: actionTypes.RESET_BUTTON,
    audio: document.querySelector('#beep')
  }
}

export const START_TIMER = () => {
  return {
    type: actionTypes.START_BUTTON
  }
}

export const STOP_TIMER = () => {
  return {
    type: actionTypes.STOP_BUTTON
  }
}

export const TIMER_COUNTDOWN = () => {
  return {
    type: actionTypes.TIMER_COUNTDOWN,
    payload: {
      audio: document.querySelector('#beep'),
      time: document.querySelector('#time-left').innerHTML,
      transformedTime: numTransform(timerCounter(document.querySelector('#time-left').innerHTML))
    }
  }
}

export const INCREMENT_TIMER = (event) => {
  return {
    type: actionTypes.INCREMENT_BUTTON,
    button: event.target.closest('button').getAttribute('id')
  }
}

export const DECREMENT_TIMER = (event) => {
  return {
    type: actionTypes.DECREMENT_BUTTON,
    button: event.target.closest('button').getAttribute('id')
  }
}
