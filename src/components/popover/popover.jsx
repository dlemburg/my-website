import React, {Component} from 'react';

import './popover.css';

class Popover extends Component {
    render(props) {
        console.log(this.props);
        return (
            <div className="popover-overlay">
                <span 
                    onClick={() => this.props.onDismiss()}
                    className="popover-close-btn">
                    &times;
                </span>
                <div className="popover-container animate-zoom" >
                    <div className="popover-title align-center"><h3>{this.props.title}</h3></div>
                    <div className="popover-body align-center">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Popover;