import './App.css';
import io from 'socket.io-client'

URL = "http://localhost:3001"
const socket = io.connect(URL)

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
