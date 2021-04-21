import { object } from 'prop-types'
import React from 'react'

import classes from './Burger.module.css'
import BurgerIngerdient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    //transform in array
    let transofrmedIngredients= Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
              return  <BurgerIngerdient key={igKey + i} type={igKey} />
            } );
        })
            .reduce( (arr,el) => {
                return arr.concat(el)
            },[]
    );
    
    if (transofrmedIngredients.length === 0) {
         
        transofrmedIngredients = <p>Aggiungi Ingredienti!</p>;
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngerdient type="bread-top" />   
            {transofrmedIngredients} 
            <BurgerIngerdient type="bread-bottom" />            
        </div>
    );
}

export default burger;