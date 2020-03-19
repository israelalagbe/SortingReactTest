import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
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
    state={
        people: [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ]
    }
    constructor() {
        super();
    }
    componentWillMount(){
        this.sortName()
    }
    sortName(){
        const people = this.state.people;
        const sortedPeople = people.sort((person1, person2)=>person1.name.localeCompare(person2.name))
        this.setState({
            people: sortedPeople
        })
    }
    sortAge(){
        const people = this.state.people;
        const sortedPeople = people.sort((person1, person2)=>person1.age.localeCompare(person2.age))
        this.setState({
            people: sortedPeople
        })
    }
    render() {
        const people = this.state.people;
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

export default RecordTable;
