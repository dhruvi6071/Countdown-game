import { useState } from "react";

export default function TimerChallange({title, targetTime}) {
    const[timeStarted, setTimeStarted] = useState(false);
    const[timeExpired, setTimeExpired] = useState(false);

    function handleStart() {
        setTimeout(() => {
            setTimeExpired(true);
        }, targetTime*1000);

        setTimeStarted(true);
    }

    function handleStop() {
        
    }

    return <section className="challenge">
         <h2>{title}</h2>
         {timeExpired && <p>You Lost !</p>}
         <p className="challenge-time">
            {targetTime} second{targetTime>1 ? 's' : ''}
         </p>
         <p>
            <button onClick={handleStart}>
                {timeStarted ? 'Stop' : 'Start'} Challenge
            </button>
         </p>
         <p className={timeStarted ? 'active' : undefined}>
            {timeStarted ? 'Time running...' : 'Timer inactive'}
         </p>
    </section>
}