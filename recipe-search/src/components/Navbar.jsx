import React, { useState, useRef, useContext }from 'react'
import { RecipeContext } from '../App';
import '../assets/CSS/navbar.css';
import SearchModal from './SearchModal';
// import data from '../data';



function Navbar() {

   const navbarContext = useContext(RecipeContext);
   const recipeModalState = navbarContext.recipeModalState;
   const handleOpenModal = navbarContext.handleOpenModal;

   

    const API_KEY = "0852649f54a277171918d8778f65a799";
    const APP_ID = "d114db93";
    
    
    const [searchBtn, setSearchBtn] = useState(false);
    // const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const [recipes, setRecipes] = useState([]);
    const [recipeName, setRecipeName] = useState("");

    const handleChange = (e) => {
        if (inputRef.current.value) {
            setSearchBtn(true);
        } else {
            setSearchBtn(false);
        }
    }

    
    
    // search for a recipe

    const searchForRecipe = (query) => {
        setLoading(true);
        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(res => {
                // console.log("final response", res.hits);
                setRecipes(res.hits);
                setRecipeName(res.q);
                setLoading(false);
            })
            .catch(err => {
                console.log("error", err);
                setLoading(false);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchForRecipe(inputRef.current.value);
        handleOpenModal();
    }

    // useEffect(()=> {
    //     searchForRecipe("chicken");
    //     setModal(true)
    // }, []);

    
  return (
    <React.Fragment>
        <header className='navbar-section'>
            <div className="navbar-logo">
                <h1 className="navbar-text">KandyEatery</h1>
            </div>

            {/* menu navigation */}
            <nav className="navigation">
                <ul className="menu-nav">
                    <li className="menu-nav-item">Home</li>
                    <li className="menu-nav-item">About</li>
                    <li className="menu-nav-item">Recipes</li>
                    <li className="menu-nav-item">Home</li>
                    <li className="menu-nav-item">About</li>
                </ul>
            </nav>

            {/* search bar */}
            <div className="search-bar-container">
                <input 
                    type="text"
                    name="search"
                    id="search"
                    placeholder='search'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button
                    type='submit'
                    className={(!searchBtn) ? 'hidebtn' : 'showbtn'}
                    onClick={handleSubmit}
                >
                    search
                </button>
                
            </div>
        </header>
        
        {
            recipeModalState.isModalOpen && <div className='lightbox'>
                <SearchModal recipes={recipes} loading={loading} name={recipeName}/>
            </div>
        }
    </React.Fragment>
  )
}

export default Navbar