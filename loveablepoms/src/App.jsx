import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <NavBar/>
      <Header />
      <Home />
      <Footer/>
    </div>
  )
}

export default App
