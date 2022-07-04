import React, { useContext, useReducer } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RecipeContext } from '../App';
import '../assets/CSS/seachModal.css';
// import {v4 as uuidv4} from 'uuid'
import { itemReducer } from '../reducer';

const initialState = {
  isItemModalOpen: false,
}

// the small modal

const RecipeItemModal = ({ingredients, recipes, id}) => {

  console.log(id);
  // const recipeDisplayed = recipes.filter(myRecipe => myRecipe.id === id);
  // console.log(recipeDisplayed);
  // console.log(recipes);
  // recipes.map(item => {
  //   console.log(item.id);
  //   return item.id;
  // })
  
  return (
    <div className="lightbox1">
      <div className="recipe-item-modal">
        <p>Hello</p>
        <p>{ingredients}</p>
      </div>
    </div>
  )
}

function SearchModal({recipes, loading, name}) {

  const [mealItemModal, dispatch] = useReducer(itemReducer, initialState);

  const modalContext = useContext(RecipeContext);
  const handleCloseModal =  modalContext.handleCloseModal;
  // console.log(handleCloseModal);

  const handleOpen = (id) => {
    dispatch({ type: "OPEN_MODAL"});

    

  }

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL"});
  }

  
  // console.log(recipes);
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
                <div className='recipeItem' onClick={handleOpen} key={item.id}>
                  <div className="item-container">
                    <img src={item.recipe.image} alt="recipe item"  className='recipe-image'/>
                    <span>{item.recipe.label}</span>
                  </div>
                  <div>
                    <p>{item.recipe.ingredientLines}</p>
                    <p>{item.id}</p>
                  </div>
                  
                    
                    {/* {
                      item.recipe.ingredientLines.map(ingredient => {
                        // console.log(ingredient);
                        return (
                                  
                            <div>
                              {

                                mealItemModal.isItemModalOpen && <RecipeItemModal ingredients={ingredient}/>
                              }
                            </div>
                            
                          
                        )
                      })
                    } */}

                    {
                      mealItemModal.isItemModalOpen && <RecipeItemModal recipes={recipes} ingredients={item.recipe.ingredientLines} id={item.id}/>
                    }
                  
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default SearchModal