import React, {Component} from 'react';
import './modal.css';

class Modal extends Component {
    render(props) {
        const getButtons = (buttons) => {
            const buttonsLength = buttons.length;
            return buttons.map((button, index) => {
              return (
                <div key={index} className="row no-padding">
                    <div className={buttons.length === 2 ? "col-6" : "col-12"}>
                        <button className="btn width-80" onClick={() => button.handler()}>{button.title}</button>
                    </div>
                </div>
              )
            });
        }
        return (
            <div className="modal-overlay">
                <div className="modal-content align-center">
                    <div className="modal-header">{ this.props.title }</div>
                    <div className="modal-body">{ this.props.children }</div>
                    <div className="modal-footer">
                       {this.props.buttons.length > 0 && getButtons(this.props.buttons) }
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;