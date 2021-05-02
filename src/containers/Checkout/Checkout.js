import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import axios from '../../axios-order';
import FormItem from './FormItem/FormItem';
import Button from '../../components/UI/Button/Button'
import classes from './Checkout.module.css'
import Spinner from '../../components/UI/Spinner/Spinner';
//import {Route} from 'react-router-dom'

class Checkout extends Component{
    state = {
        ingredients: null,
        price: 0,
        loading: false,
        customer: {
            name:'giulio',
            adress: {
                street: 'strada-test',
                city: 'Roma',
                country: 'Italia'
            }
        }    
    }
    //mounted
    componentDidMount (){
        const query = new URLSearchParams(this.props.location.search)
        //console.log(query.entries())
        let queryIngredient = {};
        for (let param of query.entries() ) {
           if (param[0] === 'price') {
            //console.log(param[0])
            this.setState({price: param[1]})
           } else {
                queryIngredient[param[0]] = +param[1]
           }
            
        }
        this.setState({ingredients: queryIngredient})
    }
    orderHandlere=(event)=>{
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredienti: this.state.ingredients,
            ammontare: this.state.price,
            customer: this.state.customer
        }
        axios.post('/ordini.json', order)
        .then(response =>  this.setState({loading: false}) )
    }

    //render
    render(){
        let form = (
            <div className={classes.Forminner}>
                <h1 >{this.state.price}</h1>
                <FormItem type='text' />
                <Button btnType='Success' clicked={this.orderHandlere}>Ordina</Button>
            </div>   
        );
        if(this.state.loading){
            form = <Spinner/>
        }

        return(
            <Aux >
                <div className={classes.Form}>                               
                   {form}
                </div>
                
            </Aux>
        )
    }
    
}

export default Checkout;