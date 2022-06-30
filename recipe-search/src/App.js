import React, { useReducer } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import SearchModal from './components/SearchModal';
import { reducer } from './reducer';
export const RecipeContext = React.createContext();

const initialState = {
  isModalOpen: false,
}

function App() {
  
  const [recipeModalState, dispatch] = useReducer(reducer, initialState);
  // api
  
  const handleOpenModal = () => {
    dispatch({ type: "OPEN_MODAL"});
  }

  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL"});
  }

  // useEffect(() => {
  //   generateApi();
  // })

  return (
    <React.Fragment>
      <RecipeContext.Provider
        value={{
          recipeModalState,
          handleCloseModal,
          handleOpenModal,
        }}
      >
        <Navbar />
        <main>
          <Hero />
        </main>
      </RecipeContext.Provider>
    </React.Fragment>
  )
}

export default App
