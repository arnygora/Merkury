import React from 'react';
import store from '../../redux/store';

class UsersSelect extends React.Component {
    handleChange = (e) => {
        this.props.onSortByFilter(e.target.value);
        store.dispatch({
            type: 'SORT_STATUS',
            payload: {
                status: e.target.value
            }
        });

        console.log(store.getState());
    };
    render() {
        return(
            <select name="usersSort" id="usersSort" onChange={this.handleChange}>
                {
                    this.props.data.map((item, index) => {
                        return <option key={index} value={item}>Sort: {item}</option>
                    })
                }
            </select>
        )
    }
}
export default UsersSelect;