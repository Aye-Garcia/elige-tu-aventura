import React, { Component } from 'react';

class list extends Component {
    render() {
        return (
            <div className='list'>
                <h4>Lista de selecciones previas:</h4>
                <ul>
                    {this.props.record.map((e, i)=> 
                    <li key={i}>{e}</li>
                    )}
                </ul>
            </div>
        );
    }
}


export default list;