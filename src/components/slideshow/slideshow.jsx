import React, {Component} from 'react';

import './slideshow.css';

class Slideshow extends Component {
    render(props) {
        console.log("this.props: ", this.props);
        return (
            <div className="slideshow-container">
                 <span 
                    onClick={() => this.props.closeSlideshow()}
                    className="slideshow-close-btn">
                    &times;
                </span>
                {this.props.imgs.map((img, index) => {
                    return (
                        <div key={index} className="img-container align-center">
                            <img className="width-80" alt="Woops, this image is missing!" src={require(`../../img/${img}`)} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Slideshow;