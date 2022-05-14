import React from 'react'
// import { v4 as uuidv4} from 'uuid';
import '../assets/CSS/hero.css';

function HeroCard(props) {
    const {title, calories, ingredients,  image} = props
    

  return (
    
    <div className='card'>
        <div className="recipe-content">
            <figure>
                <img className='card-img' src={image} alt="" />
            </figure>
            <div className="recipe-info">
                <h5>{title}</h5>
                <h6>{calories}</h6>
            </div>
        </div>
        <div className="ingredients">
            <ul>
                <li>{ingredients.join(", ")}</li>
            </ul>
        </div>
    </div>
  )
}

export default HeroCard