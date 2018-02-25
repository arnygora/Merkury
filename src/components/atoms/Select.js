import React, {Component} from 'react';
import './Select.css';

class Select extends Component {
    render() {
        return (
            <select name="sel" id="sales">
                {
                    this.props.data.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                    })
                }
            </select>
        );
    }
}
export default Select;