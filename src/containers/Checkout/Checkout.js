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
        name:'giulio',
        street: 'strada-test',
        city: 'Roma',
        country: 'Italia'
                
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
            customer: {
                name: this.state.name,
                adress: {
                    street: this.state.street,
                    city: this.state.city,
                    country:  this.state.country
                }
            }
        }
        axios.post('/ordini.json', order)
        .then(response =>  {
            this.setState({loading: false}) 
            this.props.history.push({
            pathname: '/',           
        })})
    }
    handleNameChange = (e) => {
        //console.log(e.target.value);    
        this.setState({name: e.target.value} );
    }

    handleStreetChange = (e) => {  
        this.setState(  {street:e.target.value} );
    }
    handleCityChange = (e) => {        
        this.setState( {city:e.target.value} );
    }
    handleCountryChange = (e) => {        
        this.setState( {country:e.target.value});
    }

    //render
    render(){
        /**/
        
        let form = (
            <div className={classes.Forminner}>
                  <h1 >{this.state.price}</h1> 
                <FormItem change={this.handleNameChange} type='text' nameinput='Nome Utente'/>
                <FormItem change={this.handleCountryChange} type='text' nameinput='Nazione' />               
                <FormItem change={this.handleCityChange} type='text' nameinput='Citta' />
                <FormItem change={this.handleStreetChange} type='text'  nameinput='Indirizzo'/>
            
                
                <Button btnType='Success' clicked={this.orderHandlere}>Ordina</Button>
            </div>   
        );
        let formToMake = ( <div className={classes.FormEmpy}> <h3 >Carrello Vuoto</h3> </div> )
        if(this.state.loading){
            form = <Spinner/>
        }

        return(
            <Aux >
                <div className={classes.Form}>                               
                   {this.state.price !== 0 ? form : formToMake}
                </div>
                
            </Aux>
        )
    }
    
}

export default Checkout;