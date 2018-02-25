import React, {Component} from 'react';
import './Select.css';

class Select extends Component {
    handleChange = (e) => {
        this.props.onChangeSelect(e.target.value)
    };
    render() {
        return (
            <select name="sel" id="sales" onChange={this.handleChange}>
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