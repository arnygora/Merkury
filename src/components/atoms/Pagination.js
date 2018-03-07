import React from 'react';
import _ from 'lodash';

const propTypes = {
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object,
};

const defaultProps = {
    initialPage: 1
};

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }
    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }


export default Pagination;