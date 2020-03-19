import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    render() {
        const {sortByDOB,sortByName} = this.props;
        
        return (
        <div className="checkboxes">
            <Checkbox onChange={({target})=>target.checked && sortByName()  }/>
            <label>Name</label>
            <Checkbox onChange={({target})=>target.checked && sortByDOB()  }/>
            <label>Age</label>
        </div>
        );
    }
}

Filter.propTypes={
    sortByDOB: PropTypes.func,
    sortByName: PropTypes.func
}

export default Filter;