import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
