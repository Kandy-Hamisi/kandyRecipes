import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import SearchModal from './components/SearchModal';
function App() {
  
  // api
  

  // useEffect(() => {
  //   generateApi();
  // })

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Hero />
      </main>
    </React.Fragment>
  )
}

export default App
