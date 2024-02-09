import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallange title='Easy' targetTime={1}></TimerChallange>
      <TimerChallange title='Not easy' targetTime={5}></TimerChallange>
      <TimerChallange title='Getting Tough' targetTime={10}></TimerChallange>
      <TimerChallange title='Pros Only' targetTime={15}></TimerChallange>
      </>
  );
}

export default App;
