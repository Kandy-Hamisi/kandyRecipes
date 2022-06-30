import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RecipeContext } from '../App';
import '../assets/CSS/seachModal.css';
// import {v4 as uuidv4} from 'uuid'

function SearchModal({recipes, loading, name}) {

  const modalContext = useContext(RecipeContext);
  const handleCloseModal =  modalContext.handleCloseModal;
  console.log(handleCloseModal);

  console.log(recipes);
  return (
    <div className="mymodal">
      <div className="close-btn"><FaTimes onClick={handleCloseModal} /></div>
        <h1>{name}</h1>
        <div className='recipe-container'>
          {
            
            (loading)
              ? <h3>Loading Data...</h3> 
              : recipes.map((item) =>{
              return (
                <div className='recipeItem'>
                  <div className="item-container">
                    <img src={item.recipe.image} alt="recipe item"  className='recipe-image'/>
                    <span>{item.recipe.label}</span>
                  </div>
                  <div className="steps">
                    {
                      item.recipe.ingredientLines.map(ingredient => {
                        return <div>{ingredient}</div>;
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default SearchModal