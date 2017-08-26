import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './redux/store';
import { openModal, closeModal } from './redux/actions/modal';
import { openPopover, closePopover } from './redux/actions/popover';
import { openMenu, closeMenu } from './redux/actions/menu';
import { openToast, closeToast } from './redux/actions/toast';

import logo from './logo.svg';
import './App.css';
import AppearingText from './containers/appearing-text/appearing-text.jsx';
import Header from './components/header/header.jsx';
import Footer from './containers/footer/footer.jsx';
import Modal from './components/modal/modal.jsx';
import Popover from './components/popover/popover.jsx';
import Toast from './components/toast/toast.jsx';

import AboutMeTemplate from './components/about-me/about-me.jsx';
import ContactTemplate from './containers/contact/contact.jsx';

import * as API from './utils/api';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homePageMessage: "Hey, my name is Daniel Lemburg. If you would like to hire or contact me, I'd love to help you build quality software!",
      appearingTextArr: ["Technologies I work with........", "Javascript", ".Net C#", "Node.js", "MongoDB", "MySQL", "Cloud Computing: AWS", "AngularJS", "Angular@latest", "React/Redux", "HTML/CSS", "Ionic Framework/Cordova"],    
    };
  }

  // data, api
  onPopoverDismiss(shouldShowToast, toastMessage, toastDuration = 6000) {
    //const callback = () => setTimeout(() => this.setState({isToastOpen: false, toastMessage: ""}), 4000);
    //this.setState({isToastOpen: true, toastMessage}, callback);

    this.props.closePopover();
    if (shouldShowToast) {
      this.props.openToast(toastMessage);
      setTimeout(() => this.props.closeToast(), 6000);
    }
  }

  bodyClick() {
    const { modal, menu } = this.props;
    menu.isOpen && this.props.closeMenu();
    modal.isOpen && modal.shouldDismissOnBodyClick ? this.props.modal.isOpen && this.props.closeModal() : null;
  }

  render() {
    const sidenavCssClasses = this.props.menu.isOpen ? 'sidenav sidenav-show' : 'sidenav';

    return (
      <div className="app-container" onClick={() => this.bodyClick()}>

        { this.props.toast.isOpen &&
          <Toast message={this.props.toast.message}></Toast> }
        
        {/* modal takes title, body, and buttons as props. template as child */}
        { this.props.modal.isOpen &&
          <Modal title={this.props.modal.title} buttons={this.props.modal.buttons}>
              <div>{this.props.modal.template}</div>
          </Modal> }

        {/* popover takes title, template w/ onDismiss callback. popover used for forms sent to api */}
        { this.props.popover.isOpen &&
          <Popover title={this.props.popover.title} onDismiss={this.props.popover.onDismiss}>
              <div>{this.props.popover.template}</div>
          </Popover> }

        {/* menu */}
        <div id="mySidenav" className={sidenavCssClasses}>
          <div className="closebtn" onClick={() => this.props.closeMenu()}>&times;</div>
          <div 
              onClick={() => this.props.openPopover({template: <ContactTemplate onDismiss={this.onPopoverDismiss.bind(this)} />, title: "Contact Me", onDismiss: this.props.closePopover.bind(this)})}>
              Contact
          </div>
          <div onClick={() => this.props.openModal({template: <AboutMeTemplate />, title: "About Me", buttons: [], shouldDismissOnBodyClick: true})}>About</div>
          <div><a href="#">APPetite</a></div>
        </div>



        { /*** END GLOBAL ***/}




        {/* normal flow */}
        <Header logo="dl-technology" handleOpenMenu={this.props.openMenu.bind(this)}></Header>
        <main className="width-100 align-center home-container">
          <div className="subtitle align-center width-50"> 
            {this.state.homePageMessage}
          </div>
        </main>
        <AppearingText appearingTextArr={this.state.appearingTextArr}></AppearingText>
        <Footer></Footer>
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
      modal: state.modal,
      popover: state.popover,
      menu: state.menu,
      toast: state.toast
    }; 
}
const mapDispatchToProps = { openMenu, closeMenu, openModal, closeModal, openToast, closeToast, openPopover, closePopover};

export default connect(mapStateToProps, mapDispatchToProps)(App);



/*
function mapDispatchToProps(dispatch) {
  return { 
    	actions: bindActionCreators(TodoActions, dispatch) 
    };
}
*/




  /*
  openMenu() { store.dispatch(openMenu()); }

  closeMenu() { this.props.menu.isOpen && store.dispatch(closeMenu()); }
  */
/*
  openPopover(template, title, onDismiss) {
    store.dispatch(openPopover({template, title, onDismiss}));
  }


  closePopover() {
    store.dispatch(closePopover({template: null, title: "", onDismiss: null}));
  }
*/
  /*
  openModal(template, title, buttons = [], shouldDismissOnBodyClick = true) {
    store.dispatch(openModal({template, title, buttons, shouldDismissOnBodyClick}));
  }
  
  closeModal() {
    this.props.modal.isOpen && this.props.closeModal();
  }
  */
