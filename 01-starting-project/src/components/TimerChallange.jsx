import { useState, useRef } from "react";

// let timer; //variable no use karie to 2 timer ne aek sathe chalu na kari shakaay km ke pahelu start thayelu timer no variable bija ne work nai karva de

export default function TimerChallange({title, targetTime}) {
    const timer = useRef();

    const[timeStarted, setTimeStarted] = useState(false);
    const[timeExpired, setTimeExpired] = useState(false);

   

    function handleStart() {
       timer.current = setTimeout(() => {
            setTimeExpired(true);
        }, targetTime*1000);

        setTimeStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return <section className="challenge">
         <h2>{title}</h2>
         {timeExpired && <p>You Lost !</p>}
         <p className="challenge-time">
            {targetTime} second{targetTime>1 ? 's' : ''}
         </p>
         <p>
            <button onClick={timeStarted ? handleStop : handleStart}>
                {timeStarted ? 'Stop' : 'Start'} Challenge
            </button>
         </p>
         <p className={timeStarted ? 'active' : undefined}>
            {timeStarted ? 'Time running...' : 'Timer inactive'}
         </p>
    </section>
}