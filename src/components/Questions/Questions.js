import React from 'react';
import { database } from '../../services/firebase.js';
import map from 'lodash/map';
import broadcast from '../../services/notification.js';

let sessionStartTime = Date.now();

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: {}
        }
    }
    removeQuestion(questionId) {
        const questionRef = database.ref(`classrooms/${this.props.classroomId}/questions/${questionId}`);
        questionRef.remove();
    }
    render() {
        return (
            <ul>
               {
                    map(this.state.questions, (question, key) => {
                        return <li key={key}>
                            {question.content} - {question.user} <button onClick={() => this.removeQuestion(key)}>x</button>
                        </li>
                    })
               }
            </ul>
        )
    }
    componentDidMount() {
        this.questionsRef = database.ref(`classrooms/${this.props.classroomId}/questions`);
        
        this.questionsRef.on('value', (snapshot) => {
            this.setState({questions: snapshot.val() });
        });

        this.questionsRef.on('child_added', (question) => {
            const { content, user, timestamp } = question.val();
            if (timestamp > sessionStartTime) {
                const message = `New question from ${user}: ${content}`;
                broadcast(message);
            }
        });

    }
    componentWillReceiveProps(nextProps) {
        if (this.props.classroomId !== nextProps.classroomId) {
            this.questionsRef.off();
            this.questionsRef = database.ref(`classrooms/${nextProps.classroomId}/questions`);
            this.questionsRef.on('value', (snapshot) => {
                this.setState({questions: snapshot.val()});
            });
            
            this.questionsRef.on('child_added', (question) => {
                const { content, user, timestamp } = question.val();
                if (timestamp > sessionStartTime) {
                    const message = `New question from ${user}: ${content}`;
                    broadcast(message);
                }
            });
        }
    }
}

export default Questions;