import React, {Component} from 'react';

import './control-message.css';

class ControlMessage extends Component {
    render(props) {
        return (
            <div className="control-message-container align-center">
                {this.props.errMessages.map((err, index) => {
                    return <div className="text-left width-80" key={index}>{err}</div>
                })}
            </div>
        );
    }
}

export default ControlMessage;