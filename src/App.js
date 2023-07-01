import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <DrumMachine />
    </div>
  );
};

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      const drumPad = document.getElementById(`drum-pad${key}`);
      if (drumPad) {
        const audio = drumPad.querySelector('audio');
        audio.currentTime = 0;
        audio.play();
        setDisplayText(`Triggered: ${key}`);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <h1>Welcome to the Drum Machine!</h1>
      <div id="display">{displayText}</div>
      <DrumPad triggerKey="Q" soundSrc="sound1.mp3" />
      <DrumPad triggerKey="W" soundSrc="sound2.mp3" />
      <DrumPad triggerKey="E" soundSrc="sound3.mp3" />
      <DrumPad triggerKey="A" soundSrc="sound4.mp3" />
      <DrumPad triggerKey="S" soundSrc="sound5.mp3" />
      <DrumPad triggerKey="D" soundSrc="sound6.mp3" />
      <DrumPad triggerKey="Z" soundSrc="sound7.mp3" />
      <DrumPad triggerKey="X" soundSrc="sound8.mp3" />
      <DrumPad triggerKey="C" soundSrc="sound9.mp3" />
    </div>
  );
};

const DrumPad = ({ triggerKey, soundSrc }) => {
  const handlePadClick = () => {
    const audio = document.getElementById(triggerKey);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <div className="drum-pad" id={`drum-pad${triggerKey}`}>
      <button className="pad" onClick={handlePadClick}>
        {triggerKey}
      </button>
      <audio className="sound clip" id={triggerKey} src={soundSrc} />
    </div>
  );
};

export default App;
