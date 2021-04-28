import React, {Component} from 'react'

import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
    //debug non necessita classe 
    componentDidUpdate(){
       // console.log('update')
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
                    <h3> Il Tuo Ordine </h3>
                    <p>Un delizioso hamburger</p>

                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p><strong>Prezzo Totale:</strong> {this.props.price.toFixed(2)}</p>
                    <p>Procedere con l'acquisto?</p>
                    <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancella</Button>
                    <Button btnType='Success' clicked={this.props.purchaseContinue}>Continua</Button>
                </Aux>
            )

    }    
    
} ;



export default OrderSummary;