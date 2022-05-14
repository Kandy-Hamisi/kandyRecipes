import React, { useState, useRef, useEffect }from 'react'
import '../assets/CSS/navbar.css';
import SearchModal from './SearchModal';
// import data from '../data';

function Navbar() {

   

    const API_KEY = "0852649f54a277171918d8778f65a799";
    const APP_ID = "d114db93";
    
    
    const [searchBtn, setSearchBtn] = useState(false);
    const [modal, setModal] = useState(false);
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
        setModal(true);
    }

    useEffect(()=> {
        searchForRecipe("chicken");
        setModal(true)
    }, []);

    
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
            modal && <div className='lightbox'>
                <SearchModal recipes={recipes} loading={loading} name={recipeName}/>
            </div>
        }
    </React.Fragment>
  )
}

export default Navbar