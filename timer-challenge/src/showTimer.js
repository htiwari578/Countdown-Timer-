import React from 'react';

const ShowTimer =(props)=>{
    const  {hours,minutes,seconds,
        handlePause,
        handleReset,
        handleResume,isPaused}  = props;
    return (
        <div className='show-container'>
        <div className='timer-box'>
          <div>{hours <10 ? `0${hours}` : hours}</div>
          <span>:</span>
          <div>{minutes < 10 ? `0${minutes}`: minutes}</div>
          <span>:</span>
          <div>{seconds < 10 ? `0${seconds}`: seconds}</div>
        
        </div>
        <div className='action-box'>
          {
            !isPaused && <button className ='timer-button' onClick={handlePause}>Pause</button>
          }
           {
            isPaused && <button className ='timer-button' onClick={handleResume}>Resume</button>
          }
          <button className ='timer-button' onClick={handleReset}> Reset</button>
        </div>
      </div>

    )
}

export default ShowTimer;