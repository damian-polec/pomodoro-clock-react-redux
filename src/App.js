import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle, faPauseCircle, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';
import BurgerIcon from './components/UI/BurgerIcon/BurgerIcon';
import { timerCounter, numTransform } from './helpers/helpers';
import './App.scss';

library.add(faPlayCircle, faPauseCircle, faRedo, faArrowAltCircleUp, faArrowAltCircleDown);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: '25',
      break: '5',
      sessionTimer: '25:00',
      breakTimer: '05:00',
      isSessionInitialized: true,
      isPlaying: false,
      isModalVissible: false,
      intervalId: ''
    }
    this.showModal = this.showModal.bind(this);
    this.onResetHandler = this.onResetHandler.bind(this);
    this.onDecrementHandler = this.onDecrementHandler.bind(this);
    this.onIncrementHandler = this.onIncrementHandler.bind(this);
    this.onStartHandler = this.onStartHandler.bind(this);
    this.onStopHandler = this.onStopHandler.bind(this);
    this.timerCountDown = this.timerCountDown.bind(this);
  }



  timerCountDown () {
    const time = document.querySelector('#time-left').innerHTML;
    const audio = document.querySelector('#beep');
    const transformedTime = numTransform(timerCounter(time));
    if(time === '00:00') {
      audio.play();
      this.setState({
        isSessionInitialized: !this.state.isSessionInitialized,
        sessionTimer: this.state.isSessionInitialized ? this.state.session + ':00' : this.state.sessionTimer,
        breakTimer: !this.state.isSessionInitialized ? this.state.break + ':00' : this.state.breakTimer
      })
    } else if(this.state.isSessionInitialized) {
        this.setState({sessionTimer: transformedTime})
    } else{
      this.setState({breakTimer: transformedTime})
    }
  }

  showModal () {
    this.setState({ 
      isModalVissible: !this.state.isModalVissible,
    });
  }

  onResetHandler () {
    const audio = document.querySelector('#beep');
    audio.pause();
    audio.currentTime = 0;
    this.setState({
      session: 25,
      break: 5,
      sessionTimer: '25:00',
      breakTimer: '5:00',
      isPlaying: false,
      isSessionInitialized: true,
      intervalId: clearInterval(this.state.intervalId)
    })
  }

  onDecrementHandler (event) {
    const button = event.target.closest('button').getAttribute('id');
    
    button === 'session-decrement' 
      ? this.setState({
          session: this.state.session > '1' ? this.state.session - 1 : 1,
          sessionTimer: this.state.session > '1' ? `${this.state.session - 1}:00` : '1:00', 
          isPlaying: false, 
          isSessionInitialized: true
        }) : this.setState({
            break: this.state.break > '1' ? this.state.break - 1 : 1 ,
            breakTimer: this.state.break > '1' ? `${this.state.break - 1}:00` : '1:00', 
            isPlaying: false, 
            isSessionInitialized: true
          });
  }

  onIncrementHandler(event) {
    const button = event.target.closest('button').getAttribute('id');
    
    button === 'session-increment' 
      ? this.setState({
          session: this.state.session < '60' ? parseInt(this.state.session) + 1 : 60,
          sessionTimer: this.state.session < '60' ? `${parseInt(this.state.session) + 1}:00` : '60:00', 
          isPlaying: false, 
          isSessionInitialized: true
        }) : this.setState({
            break: this.state.break < '60' ? parseInt(this.state.break) + 1 : 60 ,
            breakTimer: this.state.break < '60' ? `${parseInt(this.state.break) + 1}:00` : '60:00', 
            isPlaying: false, 
            isSessionInitialized: true
      });
  }

  onStartHandler() {
    this.setState({
      isPlaying: !this.state.isPlaying,
      intervalId: setInterval(this.timerCountDown, 1000)
    });
    
    //const time = document.querySelector('#time-left').innerHTML;
    //const interval = setInterval(timerCounter(time))
    //this.setState({intervalId: interval});
  }

  onStopHandler() {
    this.setState({
      isPlaying: !this.state.isPlaying,
      intervalId: clearInterval(this.state.intervalId)
    });
  }

  render() {
    return (
      <div className="App">
        <BurgerIcon click={this.showModal}/>
        <Timer 
          label='timer-label'
          sessionTime={this.state.session}
          reset={this.onResetHandler}
          start={this.onStartHandler}
          stop={this.onStopHandler}
          sessionTimer={this.state.sessionTimer}
          breakTimer={this.state.breakTimer}
          isSessionInitialized={this.state.isSessionInitialized}
          isPlaying={this.state.isPlaying}/>
        <Modal 
          sessionTime={this.state.session}
          breakTime={this.state.break}
          show={this.state.isModalVissible}
          decrementHandler={this.onDecrementHandler}
          incrementHandler={this.onIncrementHandler}/>
      </div>
    );
  }
}

export default App;
