import React, {useState, useEffect} from "react";

export default class CreateExercise extends React.Component {

    state = {
        username : "",
        description : "",
        duration : 0,
        date : "",
        userList : []
    }


    createExercise = (e) => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(exercise)
        }

        fetch('http://localhost:5000/exercise/add',options)
            .then( res => res.json() )
            .then(console.log)
            .catch(console.error)
    }

    // form handlers
    handleUsername = (e) => {
        this.setState({
            username : e.target.value
        })
    }

    handleDescription = (e) => {
        this.setState({
            description : e.target.value
        })
    }

    handleDuration = (e) => {
        this.setState({
            duration : e.target.value
        })
    }

    handleDate = (e) => {
        this.setState({
            date : e.target.value
        })
    }


    componentWillMount = () => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then( users => this.setState({
            userList : users
        }))
        .catch(console.error)
    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.createExercise}>
                    <div>
                        <label>Username</label>
                        <br />
                        <select name="username" onChange={this.handleUsername} value={this.state.username}>
                            {this.state.userList.map( user => (
                                <option value={user.username}>{user.username}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Description</label>
                        <br />
                        <input name="description" type="text" value={this.state.description} onChange={this.handleDescription} />
                    </div>
                    <div>
                        <label>Duration</label>
                        <br />
                        <input name="duration" type="number" value={this.state.duration} onChange={this.handleDuration} />
                    </div>
                    <div>
                        <label>Date</label>
                        <br />
                        <input name="date" type="date" value={this.state.date} onChange={this.handleDate} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>)
    }

    
}