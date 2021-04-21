import React, { Component }  from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgeConrols from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad:0.2,
    cheese:0.5,
    meat: 1.3,
    meat: 2,
}

class BurgerBuilder extends Component {
    /*constructor(props){
       super(props) ;
       this.state = {...}
    }*/
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
    }

    addIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;   
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.setState.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients:updatedIngredients});

    };

    removeIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;   
        const priceDedaction = INGREDIENT_PRICE[type];
        const oldPrice = this.setState.totalPrice;
        const newPrice = oldPrice - priceDedaction;
        this.setState({totalPrice: newPrice, ingredients:updatedIngredients});

    };
    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let  key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
            
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />                
                <BurgeConrols
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disable={disableInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;