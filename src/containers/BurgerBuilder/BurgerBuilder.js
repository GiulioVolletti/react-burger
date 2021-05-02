import React, { Component }  from 'react';
import axios from '../../axios-order';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgeConrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from  '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';


const INGREDIENT_PRICE = {
    insalata: 0.2,
    formaggio: 0.5,
    bacon: 1.3,
    carne: 2,
}

class BurgerBuilder extends Component {
    /*constructor(props){
       super(props) ;
       this.state = {...}
    }*/
    state = {
        ingredients : null,
        totalPrice: 4,
        purchasable: false,
        purchasing : false,
        loading: false,
        errors:false,
    }
    componentDidMount(){
       // console.log('here')
       axios.get('/ingredients.json')
            .then(result =>{
                //console.log(result.data)
                this.setState({ingredients: result.data})
            })
            .catch(errors =>{this.setState({errors: true})})
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

        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));          
            //console.log(encodeURIComponent(i))
            //console.log(encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price='+this.state.totalPrice.toFixed(2))
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
        /*
        let order = {
            ingredienti: this.state.ingredients,
            ammontare: this.state.totalPrice,
            customer: {
                name:'giulio',
                adress: {
                    street: 'strada-test',
                    city: 'Roma',
                    country: 'Italia'
                }
            }
        }

        this.setState({loading:true})
        axios.post('/ordini.json', order)
            .then(response =>   
                this.setState({loading:false, purchasing: false})  )  
   
       //alert('You Continue');*/
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let  key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
            
        }
        let orderSummary =  null ;
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }

        let burger = this.state.errors ? <p>Gli ingredienti non possono esser caricati</p> : <Spinner/>

        if (this.state.ingredients) {
            burger = (
                <Aux>
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
            )
            orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
        />;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    {orderSummary}                   
                </Modal>
                    
                {burger}           
                
            </Aux>
        );
    }
}

export default BurgerBuilder;