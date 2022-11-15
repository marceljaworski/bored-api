import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './views/Home';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
