
import React, {Component} from 'react';

class FormItem extends Component {
    
    render(){
        let formItem = null;
        switch (this.props.type) {
            case ('text'):
               formItem = <input type='text' ></input>
                break;
        
            default:
                formItem = null;
                break;
        }
        return formItem
    }

}

export default FormItem;