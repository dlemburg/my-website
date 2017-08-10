import React, {Component} from 'react';
import Slideshow from '../../components/slideshow/slideshow.jsx';

import './footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSlideshowOpen: false,
            imgs: ["code.png", "computer.png", "computer2.png", "family.png"]
        }
    }

    openSlideshow() {
        this.setState({isSlideshowOpen: true});
    }

    closeSlideshow() {
        console.log("inside close slideshow");
        this.setState({isSlideshowOpen: false});
    }

    render(props) {
        return (
            <footer className="footer">
                <div className="fixed-bottom-right">
                    <button onClick={() => this.openSlideshow()} type="button" className="btn btn-blue">Portfolio</button>
                </div>
                {this.state.isSlideshowOpen && 
                    <Slideshow 
                    imgs={this.state.imgs}
                    closeSlideshow={this.closeSlideshow.bind(this)}
                    ></Slideshow>
                }
            </footer>
        );
    }
}

export default Footer;