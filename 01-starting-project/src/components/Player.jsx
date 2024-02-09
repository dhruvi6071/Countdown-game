import { useState, useRef } from "react";

export default function Player() {
  const realPlayerName = useRef();
  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event){
  //    setSubmitted(false);
  //   setPlayerName(event.target.value);
  // }

  function handleClick(){
    setPlayerName(realPlayerName.current.value);
    realPlayerName.current.value = "";
  }

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? playerName : 'unknown entity'}</h2> */}
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={realPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
