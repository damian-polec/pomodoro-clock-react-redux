import * as actionTypes from '../actions/actionTypes';


const initialState = {
  session: '25',
  break: '5',
  sessionTimer: '25:00',
  breakTimer: '05:00',
  isSessionInitialized: true,
  isPlaying: false,
  isModalVissible: false,
}

const reducer = ( state = initialState, action) => {
  
  switch(action.type) {
    case actionTypes.SHOW_MODAL_BUTTON:
      return {
        ...state,
        isModalVissible: !state.isModalVissible
      }
    case actionTypes.RESET_BUTTON:
      action.audio.pause();
      action.audio.currentTime = 0;
      return {
        ...state,
        session: 25,
        break: 5,
        sessionTimer: '25:00',
        breakTimer: '5:00',
        isPlaying: false,
        isSessionInitialized: true
      }
    case actionTypes.START_BUTTON:
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    case actionTypes.STOP_BUTTON:
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    case actionTypes.INCREMENT_BUTTON:
      return action.button === 'session-increment' ? {
        ...state,
        session: state.session < '60' ? parseInt(state.session) + 1 : 60,
        sessionTimer: state.session < '60' ? `${parseInt(state.session) + 1}:00` : '60:00', 
        isPlaying: false, 
        isSessionInitialized: true
      } : {
          ...state,
          break: state.break < '60' ? parseInt(state.break) + 1 : 60 ,
          breakTimer: state.break < '60' ? `${parseInt(state.break) + 1}:00` : '60:00', 
          isPlaying: false, 
          isSessionInitialized: true
      }
    case actionTypes.DECREMENT_BUTTON:
      return action.button === 'session-decrement' ? {
          ...state,
          session: state.session > '1' ? state.session - 1 : 1,
          sessionTimer: state.session > '1' ? `${state.session - 1}:00` : '1:00', 
          isPlaying: false, 
          isSessionInitialized: true
        } : {
            ...state,
            break: state.break > '1' ? state.break - 1 : 1 ,
            breakTimer: state.break > '1' ? `${state.break - 1}:00` : '1:00', 
            isPlaying: false, 
            isSessionInitialized: true
          }
    case actionTypes.TIMER_COUNTDOWN:
      return action.payload.time === '00:00' ? {
          ...state,
          isSessionInitialized: !state.isSessionInitialized,
          sessionTimer: state.isSessionInitialized ? state.session + ':00' : state.sessionTimer,
          breakTimer: !state.isSessionInitialized ? state.break + ':00' : state.breakTimer
        } : state.isSessionInitialized ? {
          ...state,
          sessionTimer: action.payload.transformedTime
        } : {
          ...state,
          breakTimer: action.payload.transformedTime
        }
    default:
      return state;
  }
}

export default reducer;