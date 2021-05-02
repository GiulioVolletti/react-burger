
import React, {Component} from 'react';

class FormItem extends Component {
    
    render(){
        let formItem = null;
        switch (this.props.type) {
            case ('text'):
               formItem = (
                   <div>
                       <label>{this.props.nameinput}</label>
                        <input onChange={this.props.change} type='text' ></input>
                   </div>
                    
                    )
                break;
        
            default:
                formItem = null;
                break;
        }
        return formItem
    }

}

export default FormItem;