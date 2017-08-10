import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppearingText from './containers/appearing-text/appearing-text.jsx';
import Header from './components/header/header.jsx';
import Footer from './containers/footer/footer.jsx';
import Modal from './components/modal/modal.jsx';
import Popover from './components/popover/popover.jsx';
import Toast from './components/toast/toast.jsx';

import AboutMeTemplate from './modal-templates/about-me/about-me.jsx';
import ContactTemplate from './modal-templates/contact/contact.jsx';

import * as API from './utils/api';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      // redux layout
      isMenuOpen: false,
      isModalOpen: false,
      isPopoverOpen: false,
      isToastOpen: false,
      toastMessage: "",
      openModal: {
        id: 0,
        shouldDismissOnBodyClick: true,
        title: "",
        buttons: [],
        template: <div></div>,
      }, 
      openPopover: {
        id: 0,
        title: "",
        template: <div></div>,
        onDismiss: null
      },


      // redux other state
      appearingTextArr: ["Technologies I work with........", "Javascript", ".Net C#", "Node.js", "MongoDB", "MySQL", "Cloud Computing: AWS", "AngularJS", "Angular@latest", "React/Redux", "HTML/CSS", "Ionic Framework/Cordova"],    
    };
  }

  openMenu() {
    this.setState({isMenuOpen: true});
  }

  closeMenu() {
    const {isMenuOpen} = this.state;
    isMenuOpen && this.setState({isMenuOpen: false});
  }

  openPopover(template, title, onDismiss) {
    this.setState({isPopoverOpen: true, openPopover: {template, title, onDismiss}});
  }

  closePopover() {
    this.setState({isPopoverOpen: false, openPopover: { template: <div></div>, title: "", onDismiss: null}})
  }

  // data, api
  onPopoverDismiss(shouldShowToast, toastMessage) {
    const callback = () => setTimeout(() => this.setState({isToastOpen: false, toastMessage: ""}), 4000);

    this.closePopover();
    if (shouldShowToast) {
      this.setState({isToastOpen: true, toastMessage}, callback);
    }
  }

  openModal(template, title, buttons = [], shouldDismissOnBodyClick = true) {
    this.setState({isModalOpen: true, openModal: {template, title, buttons} });
  }

  closeModal() {
    const {isModalOpen} = this.state;
    isModalOpen && this.setState({isModalOpen: false, openModal: {template: <div></div>, title: "", buttons: []} });
  }

  bodyClick() {
    const { isMenuOpen, isModalOpen, openModal } = this.state;

    isMenuOpen && this.setState({isMenuOpen: false});
    isModalOpen && this.setState({isModalOpen: false});
  }

  render() {
    const sidenavCssClasses = this.state.isMenuOpen ? 'sidenav sidenav-show' : 'sidenav';

    return (
      <div className="app-container" onClick={() => this.bodyClick()}>
        
        {/* global accessibility: out of normal flow
            - toast
            - popover (for forms)
            - modal (for alerts)
            - menu
         */}

        {this.state.isToastOpen &&
          <Toast message={this.state.toastMessage}>
          </Toast>
        }
        
        {/* modal takes title, body, and buttons as props. template as child */}
        {this.state.isModalOpen &&
          <Modal 
            title={this.state.openModal.title} 
            buttons={this.state.openModal.buttons}>
              <div>{this.state.openModal.template}</div>
          </Modal>
        }
        {/* popover takes title, template w/ onDismiss callback. popover used for forms sent to api */}
        {this.state.isPopoverOpen &&
          <Popover 
            title={this.state.openPopover.title} 
            onDismiss={this.state.openPopover.onDismiss}>
              <div>{this.state.openPopover.template}</div>
          </Popover>
        }
        {/* menu */}
        <div id="mySidenav" className={sidenavCssClasses}>
          <div className="closebtn" onClick={() => this.closeMenu()}>&times;</div>
          <div onClick={() => this.openPopover(<ContactTemplate onDismiss={this.onPopoverDismiss.bind(this)} />, "Contact Me", this.closePopover.bind(this))}>Contact</div>
          <div onClick={() => this.openModal(<AboutMeTemplate />, "About Me", [], true)}>About</div>
          <div><a href="#">APPetite</a></div>
        </div>




        {/* normal flow */}
        {/* router here when scaling up
          <Router>
            <Route></Route>
          </Router>
          */}
        <Header logo="dl-technology" handleOpenMenu={this.openMenu.bind(this)}></Header>
        <main className="width-100 align-center home-container">
          <div className="subtitle align-center width-50"> 
            Hey, my name is Daniel Lemburg.  
            If you would like to hire or contact me, I'd love to help you 
            build quality software!
          </div>
        </main>
        <AppearingText appearingTextArr={this.state.appearingTextArr}></AppearingText>
        <Footer></Footer>


      </div>
    );
  }
}

export default App;

