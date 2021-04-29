import React from 'react';
import Buttons from './Buttons';

const Typeracer = (props) => {

const 
{ newWord, 
  inputValue, 
  setInputValue,
  disabled, 
  time, 
  animation, 
  handleInput, 
  handleStart
} = props;



    return(
         <div className="typeRacer">
            <div className="wordOutput">
             <p>{newWord}</p>
            </div>

            <div 
            style={{animation: animation !== null ? animation : "" }}
            className="time">

            <p>{time}</p>
            </div>
            <div className="wordValues">
              <input 
              type="text" 
              disabled={disabled && disabled} 
              onKeyPress={(e) => handleInput(e)} 
              value={inputValue} 
              onChange={e => setInputValue(e.target.value)}
              placeholder={disabled ? "" : "Start Typing..."}
              />
              <Buttons handleStart={handleStart} disabled={disabled}/>
            </div>
         </div>
    );
};
export default Typeracer;