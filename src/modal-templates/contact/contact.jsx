import React, {Component} from 'react';
import * as API from '../../utils/api';

import ControlMessage from '../../components/control-message/control-message.jsx';
import './contact.css';

class ContactTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            name: "",
            email: "",
            message: "",
            formIsValid: true,
            errMessages: []
        };
    }
    handleSubmit() {
        const {name, email, message } = this.state;
        const toData = {name, email, message};
        const doChecks = this.doChecks(toData);
        
        // this would be if returning to make api in single place for all popovers. no need now
        //this.props.onDismiss({name, email, message}, "contact");
        console.log("doChecks.isValid: ", doChecks.isValid);
        if (doChecks.isValid) {
            API.stack(API.routes.contact, toData, "POST").then((response) => {
                const shouldShowToast = true, toastMessage = "Thanks, I've received your contact message. I'll contact you soon!";
                this.props.onDismiss(shouldShowToast, toastMessage);
            })
            .catch((err) => {
                const shouldShowToast = true, toastMessage = "Shoot, there was an error! You can email me at daniel dot lemburg 1 at gmail dot com!";
                this.props.onDismiss(shouldShowToast, toastMessage);
            })
        } else this.setState({formIsValid: doChecks.isValid, errMessages: doChecks.errMessages});
    }

    doChecks(toData) {
        let errMessages = !toData.email || !toData.email || !toData.message ? ["Please fill in all the fields. This will help me better respond to your request."] : [];

        return { isValid: errMessages.length ? false : true, errMessages};
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }
    render(props) {
        return (
            <div className="margin-top-bottom">
                <div className="row align-center">
                    <div className="col-3"><label>Name:</label></div>
                    <div className="col-9"><input className="width-100" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/></div>
                </div>
                 <div className="row align-center">
                    <div className="col-3"><label>Email:</label></div>
                    <div className="col-9"><input className="width-100" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/></div>
                </div>
                 <div className="row align-center">
                    <div className="col-3"><label>Message:</label></div>
                    <div className="col-9"><textarea className="width-100" name="message" value={this.state.message} onChange={this.handleChange.bind(this)}/></div>
                </div>
                {!this.state.formIsValid && <ControlMessage errMessages={this.state.errMessages}></ControlMessage>}
                <div>
                    <button onClick={() => this.handleSubmit()} className="btn" type="button">Submit</button>
                </div>
            </div>
        );
    }
}

export default ContactTemplate;