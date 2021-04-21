import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
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
    </div>
);


export default buildControls