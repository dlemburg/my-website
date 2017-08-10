import React, {Component} from 'react';

import './toast.css';

class Toast extends Component {

    componentDidMount() {
        console.log("inside toast...");
        
    }
    render(props) {
        return (
            <div id="toast">{this.props.message}</div>
        );
    }
}

export default Toast;