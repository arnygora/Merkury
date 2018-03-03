import React from 'react';

class UsersSelect extends React.Component {
    render() {
        return(
            <select name="usersSort" id="usersSort">
                {
                    this.props.sort.map((item, index) => {
                        return <option key={index} value={item}>{"Sort: " + item}</option>
                    })
                }
            </select>
        )
    }
}
export default UsersSelect;