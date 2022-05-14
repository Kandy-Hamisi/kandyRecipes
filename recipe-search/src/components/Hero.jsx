import React from 'react'
import '../assets/CSS/hero.css';
import pan from '../assets/images/chicken.png';
import HeroCard from './HeroCard';
import pizza from  '../assets/images/pizza.jpg';
import food from '../assets/images/asparagus.jpg'


function Hero() {

    const pizzaIngredients = [
        'cheese', 'chicken', 'green pepper', 'tomatto'
    ]

    const asparaIngredients = [
        'green', 'chicken', 'green-pepper', 'tommato'
    ]

  return (
    <React.Fragment>
        <section className='hero-section'>
            <div className='hero-content'>
                <article className='hero-text-container'>
                    <h1>Let's start cooking with popular Recipes</h1>
                    <p>Want to learn how to cook but confused how to start?</p>
                    <p>No need to worry again!</p>
                    <div className="btn-container">
                        <button className='btn-primary'>Get Started</button>
                        <button className='btn-outline'>Explore Menu</button>
                    </div>
                </article>
                <article className="img-card-container">
                    <figure>
                        <img src={pan} alt="tomato pan" />
                    </figure>
                    <div className="card-1">
                        <HeroCard 
                            image={pizza}
                            title="Chicken Pizza"
                            calories="5.93"
                            ingredients={pizzaIngredients}
                        />
                    </div>
                    <div className="card-2">
                    <HeroCard 
                        image={food}
                        title="Asparagus"
                        calories="3.45"
                        ingredients={asparaIngredients}
                    />
                    </div>
                </article>
                
            </div>
        </section>
    </React.Fragment>
  )
}

export default Hero