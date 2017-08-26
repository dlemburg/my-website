import React, {Component} from 'react';

import './appearing-text.css';

class AppearingText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appearingTextArr: this.props.appearingTextArr,
            arrIndex: 0,
            strIndex: 0,
            textInView: this.props.appearingTextArr[0][0],  // first tick
            appearingTextInterval: setInterval(() => this.setTextInView(), 200),
            cursorInterval: setTimeout(() => setInterval(() => this.setState({cursor: !this.state.cursor}), 200), 100),
            cursor: true
        };
    }

    setTextInView() {
        let { textInView, strIndex, arrIndex, appearingTextArr } = this.state;
        
        strIndex = this.getStrIndex(appearingTextArr[arrIndex], strIndex);
        arrIndex = this.getArrIndex(appearingTextArr, arrIndex, strIndex);
        textInView = this.getTextInView(textInView, appearingTextArr[arrIndex], strIndex);

        this.setState({strIndex, arrIndex, textInView});
    }

    getStrIndex(str, strIndex) {
        return str.length - 1 === strIndex ? 0 : strIndex + 1;
    }

    getArrIndex(arr, arrIndex, strIndex) {
        if (strIndex === 0) {
            arrIndex = arr.length - 1 === arrIndex ? 0 : arrIndex += 1;
        }
        return arrIndex;
    }

    getTextInView(currentText, str, strIndex) {
        return strIndex === 0 ? str[strIndex] : currentText + str[strIndex];
    }

    componentWillUnmount() {
        clearInterval(this.state.appearingTextInterval);
        clearInterval(this.state.cursorInterval);
    }

    render(props) {
        return (
            <div className="appearing-text">
                {this.state.textInView}
                { this.state.cursor && <span className="cursor">|</span> }
            </div>
        );
    }
}

export default AppearingText;