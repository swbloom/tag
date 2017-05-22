import React from 'react';
import { database } from '../../services/firebase.js';

class NewQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            question: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const questionsRef = database.ref(`classrooms/${this.props.classroomId}/questions`);
        const question = {
            content: this.state.question,
            user: this.props.user,
            photo: this.props.userPhoto,
            timestamp: Date.now()
        }
        questionsRef.push(question);
        this.setState({ question: '' });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="question" value={this.state.question} placeholder="What is your question?" onChange={this.handleChange} />
                <button>Submit Question</button>
            </form>
        )
    }
}

export default NewQuestion;