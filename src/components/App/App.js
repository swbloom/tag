import React, { Component } from 'react';
import firebase from '../../services/firebase.js';
import ModalContainer from '../../containers/ModalContainer.js';
import { Route } from 'react-router-dom';
import SignIn from '../SignIn/SignIn.js';
import SignOut from '../SignOut/SignOut.js';
import CreateClassroom from '../CreateClassroom/CreateClassroom.js';
import JoinClassroom from '../JoinClassroom/JoinClassroom.js';
import Classrooms from '../Classrooms/Classrooms.js';
import ClassroomContainer from '../../containers/ClassroomContainer.js';
import PrivateRoute from '../PrivateRoute/PrivateRoute.js'; 

class App extends Component {
  render() {
    const { auth } = this.props; 
    return (
      <div className='App'>
        <ModalContainer />
          App
          <div>
            <pre>
              {JSON.stringify(this.props.auth, null, 3)}
            </pre>
            { auth.status === 'ANONYMOUS' && <SignIn signIn={this.props.signIn} /> }
            { auth.status === 'SIGNED_IN' && <SignOut signOut={this.props.signOut} /> }
            { auth.status === 'SIGNED_IN' && <CreateClassroom showModal={this.props.showModal} />}
            { auth.status === 'SIGNED_IN' && <JoinClassroom showModal={this.props.showModal} />}
            { auth.status === 'SIGNED_IN' && <Classrooms classrooms={this.props.classrooms} />}
            <PrivateRoute path='/classrooms/:classroomId' auth={auth} component={ClassroomContainer} />
          </div>
      </div>
    );  
  }
}

export default App;
