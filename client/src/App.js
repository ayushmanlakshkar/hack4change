import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import TranslatePage from './pages/TranslatePage';
import bg from './assets/bg-fig-main.png'
import Navbar from './utils/Navbar';

function App() {
  return (
    <div className="App h-screen w-screen bg-[#00002C] bg-repeat bg-contain flex flex-col text-white overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={Main} />
          <Route path='/transcript' Component={TranslatePage} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
