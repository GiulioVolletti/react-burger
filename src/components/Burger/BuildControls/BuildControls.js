import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Insalata', type:'insalata'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Formaggio', type:'formaggio'},
    {label: 'Carne', type:'carne'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Prezzo Totale: <strong>{props.price.toFixed(2)}</strong></p>
        { controls.map(element =>(
            <BuildControl 
                key={element.label} 
                label={element.label} 
               // type={element.type}
                added={()=> props.ingredientAdded(element.type)}
                removed={()=> props.ingredientRemoved(element.type)}
                disabled={props.disable[element.type]}
            />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
        >Ordina</button>
    </div>
);


export default buildControls