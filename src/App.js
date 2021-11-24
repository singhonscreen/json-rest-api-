import React, {useState} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import NewsVerCard from './components/NewsVerCard';
function App() {
  const [view, setView] = useState(false)


  return (
    <div className="AppContainer">
    <div className="App">
      <BrowserRouter>
        <Sidebar setView={setView} view={view} />
      </BrowserRouter>
      <NewsVerCard view={view} />
      </div>
    </div>
  );
}

export default App;
