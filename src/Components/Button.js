import React, { Component } from 'react';

class Button extends Component {

    render() {
        const {letter, increase, option} = this.props; //destructuring

        return (
            <div className='button--app'>
                <button value={letter} onClick={increase}>{letter}</button>
                <h3>{option}</h3>
            </div>
        );
    }
}

export default Button;