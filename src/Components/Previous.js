import React, { Component } from 'react';

class Previous extends Component {

    render() {
        return (
            <div className='previous'>
                <h4>Seleccion anterior: <span>{this.props.previous}</span></h4>
            </div>
        );
    }
}


export default Previous;