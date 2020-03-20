import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    render() {
        const {sortByAge,sortByName} = this.props;
        
        return (
        <div className="checkboxes">
            <Checkbox ref="name" name='name' onChange={({target})=>target.checked && sortByName()  }/>
            <label>Name</label>
            <Checkbox ref="age" name='age' onChange={({target})=>target.checked && sortByAge()  }/>
            <label>Date of Birth</label>
        </div>
        );
    }
}

Filter.propTypes={
    sortByAge: PropTypes.func,
    sortByName: PropTypes.func
}

export default Filter;