import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const RecordTableRow = ({person}) => (
    <TableRow>
        <TableCell>{person.name}</TableCell>
        <TableCell>{person.dob}</TableCell>
    </TableRow>
);

class RecordTable extends Component {
    render() {
        const people = this.props.people;
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {people.map((person, index) => <RecordTableRow key={index} person={person} />)}

                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
RecordTable.propTypes={
    people: PropTypes.array
}
export default RecordTable;
