import React from 'react';
import classes from './BuildControl.module.css'

const buildContorl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>
            {props.label}
        </div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Rimuovi</button>
        <button className={classes.More} onClick={props.added} >Aggiungi</button>
    </div>
);

export default buildContorl;