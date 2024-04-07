import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App flex-center">
      <main>
        <div className="timer flex-center">22:30:09</div>
        <div className="control flex-center">
          <Button className="play"></Button>
          <Button className="reset"></Button>
        </div>
      </main>
    </div>
  );
}

export default App;
