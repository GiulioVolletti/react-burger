import React, {Component} from 'react'

import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
    //debug non necessita classe 
    componentDidUpdate(){
        console.log('update')
    }
    
    render (){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map( igKey => {
            return (
                <li key ={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>)
        });
        return (
               <Aux>
                    <h3> Your Order </h3>
                    <p>A delicious burger</p>

                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p><strong>Total Price:</strong> {this.props.price.toFixed(2)}</p>
                    <p>Continue with ceckout?</p>
                    <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
                    <Button btnType='Success' clicked={this.props.purchaseContinue}>Continue</Button>
                </Aux>
            )

    }    
    
} ;



export default OrderSummary;