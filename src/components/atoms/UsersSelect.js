import React from 'react';

class UsersSelect extends React.Component {
    handleChange = (e) => {
        this.props.onSortByFilter(e.target.value)
    };
    render() {
        return(
            <select name="usersSort" id="usersSort" onChange={this.handleChange}>
                {
                    this.props.data.map((item, index) => {
                        return <option key={index} value={item}>{"Sort: " + item}</option>
                    })
                }
            </select>
        )
    }
}
export default UsersSelect;