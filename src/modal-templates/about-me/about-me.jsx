import React, {Component} from 'react';

import './about-me.css';
import imgFamily from '../../img/family.png';

class AboutMeTemplate extends Component {
    render(props) {
        return (
            <div>My name is Daniel Lemburg. I have a wife, Roxanne, and pitbull, Bleu. The pitbull is the one in the middle. They're pretty cool.
              <div className="align-center width-100 margin-top-bottom"><img src={imgFamily}/></div>
               I enjoy going to church, reading, playing sports, riding my bike, and tons of other things.
              My wife and I want to start a pitbull rescue and train the rescue dogs to be service dogs for veterans.
              I have a B.A. from CSU Stanislaus in Criminal Justice, but I make software for a living. My latest piece of software is called
              Appetite- it's a mobile application that allows small service-industry businesses compete with big businesses. Contact me 
              if you'd like to learn more! 
            </div>
        );
    }
}

export default AboutMeTemplate;