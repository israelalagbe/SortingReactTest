import React, { Component } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  state = {
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

  componentWillMount() {
    this.sortByName()
  }

  sortByName = () => {
    const people = this.state.people;
    const sortedPeople = people.sort((person1, person2) => person1.name.localeCompare(person2.name))
    this.setState({
      people: sortedPeople
    })
  }
  sortByAge =() => {
    const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    const people = this.state.people;
    const sortedPeople = people.sort((person1, person2) =>{
      const date1 = new Date(person1.dob.replace(pattern,'$3-$2-$1'));
      const date2 = new Date(person2.dob.replace(pattern,'$3-$2-$1'));
      return date1-date2;
    });
    this.setState({
      people: sortedPeople
    })
  }

  render() {
    const people = this.state.people;
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter sortByAge={this.sortByAge} sortByName={this.sortByName}></Filter>
        <RecordTable people={people} ></RecordTable>
      </div>
    );
  }
}

export default App;
