import React from 'react';
import burclass from './BurgerIngerdient.module.css';


const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={burclass.BreadBottom} ></div>
            break;
        case('bread-top'):
            ingredient = <div className={burclass.BreadTop} >
                <div className={burclass.Seeds1}></div>
                <div className={burclass.Seeds2}></div>
            </div>
            break;
        case('meat'):
            ingredient = <div className={burclass.Meat} >          
            </div>
            break;
        case('cheese'):
            ingredient = <div className={burclass.Cheese} >          
            </div>
            break;
        case('bacon'):
            ingredient = <div className={burclass.Bacon} >          
            </div>
            break;
        case('salad'):
            ingredient = <div className={burclass.Salad} >          
            </div>
            break;
        default: null;
    }
};

export default burgerIngredient;