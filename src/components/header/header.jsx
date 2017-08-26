import React, {Component} from 'react';

import './header.css';

class Header extends Component {
    render(props) {
        return (
            <div className="header row">
                <div className="col-6">
                    <div className="menu-icon" onClick={this.props.handleOpenMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="col-6 text-right">{this.props.logo}</div>
            </div>
        );
    }
}

export default Header;