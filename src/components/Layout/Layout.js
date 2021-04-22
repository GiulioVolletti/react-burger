import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component{
    state = {
        showSideDrawer:true,
    }
    showSideDrawerHendler=() => {
        this.setState({showSideDrawer: false})
    }
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.showSideDrawerHendler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;