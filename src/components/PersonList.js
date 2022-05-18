import React from 'react';
import axios from 'axios';
import './PersonList.css'
export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul className='list-render'>
                {
                    this.state.persons
                        .map(person =>
                            <li key={person.id}>
                               {person.id}
                            <br/>
                               {person.name}
                            <br/>
                               {person.phone}
                            <br/>
                               {person.email}
                            </li>
                        )
                }
            </ul>
        )
    }
}