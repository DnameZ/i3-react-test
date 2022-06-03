import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import FirstPage from './Pages/FirstPage/FirstPage';
import SecondPage from './Pages/SecondPage/SecondPage';
import {BrowserRouter, BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/first" element={<FirstPage/>} />
          <Route path="/second" element={<SecondPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
