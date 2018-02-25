import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div className="Box Box--Padding">
                {this.props.children}
            </div>
        );
    }
}

export default Box;