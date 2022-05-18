import React from 'react';
import API from '../api';

export default class PersonRemove extends React.Component {
    state = {
        id: ''
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        API.delete(`users/${this.state.id}`)
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
                        Person ID:
                        <input type="number" name="id" className='ml-2' onChange={this.handleChange} />
                    </label>
                    <button type="submit" className='ml-2'>Delete</button>
                </form>
            </div>
        )
    }
}
