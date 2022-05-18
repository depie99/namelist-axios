import React from 'react';
import axios from 'axios';
import './PersonAdd.css'

export default class PersonAdd extends React.Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className='add-person'>
                <form onSubmit={this.handleSubmit} className='add-person'>
                    <label>
                        Person Name:
                        <input type="text" name="name" className='ml-2' onChange={this.handleChange} />
                    </label>
                    <button type="submit" className='ml-2'>Add</button>
                </form>
            </div>
        )
    }
}