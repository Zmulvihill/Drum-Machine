import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
        <div class="drum-pad" id="drum-pad1">
      <button class="pad" id="pad1">Q</button>
      <audio class="sound clip" id="Q" src="sound1.mp3"></audio>
    </div>
    <div class="drum-pad" id="drum-pad2">
      <button class="pad" id="pad2">W</button>
      <audio class="sound clip" id="W" src="sound2.mp3"></audio>
    </div>
    <div class="drum-pad" id="drum-pad3">
      <button class="pad" id="pad3">E</button>
      <audio class="sound clip" id="E" src="sound3.mp3"></audio>
    </div>
    <div class="drum-pad" id="drum-pad4">
      <button class="pad" id="pad4">A</button>
      <audio class="sound clip" id="A" src="sound4.mp3"></audio>
    </div>
    <div class="drum-pad" id="drum-pad5">
      <button class="pad" id="pad5">S</button>
      <audio class="sound clip" id="S" src="sound5.mp3"></audio>
    </div>
    <div class="drum-pad" id="drum-pad6">
      <button class="pad" id="pad6">D</button>
      <audio class="sound clip" id="D" src="sound6.mp3"></audio>
    </div>
    <div class="drum-pad" id="drum-pad7">
      <button class="pad" id="pad7">Z</button>
      <audio class="sound clip" id="Z" src="sound7.mp3"></audio>
    </div>
    <div class="drum-pad" id="drum-pad8">
      <button class="pad" id="pad8">X</button>
      <audio class="sound clip" id="X" src="sound8.mp3"></audio>
    </div>
    <div class="drum-pad" id="drum-pad9">
      <button class="pad" id="pad9">C</button>
      <audio class="sound clip" id="C" src="sound9.mp3"></audio>
    </div>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Drum Machine
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

export default App;
