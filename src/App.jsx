import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './views/Home';
import Header from './components/Header';
import BoredProvider from "./context/Bored";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <BoredProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BoredProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
