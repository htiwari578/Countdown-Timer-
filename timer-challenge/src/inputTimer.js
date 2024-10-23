import React from 'react';

const InputTimer = ({handleInput, handleStart})=> {

    return (
        <div className='input-container'>
          <div className='input-box'>
            
            <input
            onChange= {handleInput} id = "hours" placeholder ="hh" />
            <input   onChange= {handleInput} id = "minutes" placeholder ="mm" />
            <input   onChange= {handleInput} id = "seconds" placeholder ="ss" />
          </div>
          <button
          onClick ={handleStart}
           className='timer-button'>Start</button>
          </div>
    )

}

export default InputTimer;