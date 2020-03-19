import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    render() {
        return (
        <div className="checkboxes">
            <Checkbox/>
            <label>Name</label>
            <Checkbox/>
            <label>Age</label>
        </div>
        );
    }
}

Filter.propTypes={
    sortByAge: PropTypes.func,
    sortByName: PropTypes.func
}

export default Filter;