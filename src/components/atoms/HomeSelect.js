import React, {Component} from 'react';

class HomeSelect extends Component {
    handleChange = (e) => {
        this.props.onChoisePeriod(e.target.value)
    };
    render() {
        return (
            <select name="select" id="select" onChange={this.handleChange}>
                {
                    this.props.data.map((item, index) => {
                    return <option key={index} value={item}>{"Period: " + item}</option>
                    })
                }
            </select>
        );
    }
}
export default HomeSelect;