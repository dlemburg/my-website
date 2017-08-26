import React, {Component} from 'react';

import './toast.css';

class Toast extends Component {

    render(props) {
        return (
            <div id="toast">{this.props.message}</div>
        );
    }
}

export default Toast;