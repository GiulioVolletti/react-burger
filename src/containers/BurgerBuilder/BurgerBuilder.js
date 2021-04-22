import React, { Component }  from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgeConrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from  '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
    salad: 0.2,
    cheese: 0.5,
    bacon: 1.3,
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
        purchasable: false,
        purchasing : false,
    }

    updatePurchaseState (ingredients) {
     
        const sum = Object.keys(ingredients)
            .map(igKey =>{
                return ingredients[igKey];
            })
            .reduce((sum, el)=>{
                return sum + el
            },0);
        this.setState({purchasable: sum > 0})
    };

    addIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;   
        const priceAddition = INGREDIENT_PRICE[type];        
        const oldPrice = this.state.totalPrice;
        //console.log(oldPrice);
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

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
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDedaction;
        this.setState({totalPrice: newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    };

    purchaseHandler = () =>{
        this.setState({purchasing: true})
    };

    purchaseCancelHandler  = () =>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler  = () =>{
       alert('You Continue');
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let  key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
            
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />                
                <BurgeConrols
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disable={disableInfo}
                    purchasable={this.state.purchasable}
                    price= {this.state.totalPrice}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;