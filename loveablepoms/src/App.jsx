import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <NavBar/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App
