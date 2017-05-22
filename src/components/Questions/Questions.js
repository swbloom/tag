import React from 'react';
import { database } from '../../services/firebase.js';
import map from 'lodash/map';

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: {}
        }
    }
    render() {
        return (
            <ul>
               {
                    map(this.state.questions, (question, key) => {
                        return <li key={key}>
                            {question.content} - {question.user}
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
        })        
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.classroomId !== nextProps.classroomId) {
            this.questionsRef.off();
            this.questionsRef = database.ref(`classrooms/${nextProps.classroomId}/questions`);
            this.questionsRef.on('value', (snapshot) => {
                this.setState({questions: snapshot.val()});
            });
        }
    }
}

export default Questions;