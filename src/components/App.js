import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Creators as appCreators } from '../actions/app';
import { Creators as userCreators } from '../actions/user';

export class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1>React boilerplate</h1>
        <label>Status is { this.props.status ? 'true' : 'false' }</label>
        <br />
        <button onClick={this.props.toggleStatus}>Toggle status</button>
        <br />
        <label>{this.props.users.length}</label>
        <button onClick={() => this.props.fetchUsers(10)}>Fetch users</button>
        {
          this.props.users.map(user => (
            <React.Fragment>
              <img src={user.picture.large} alt='profile'/>
              <label>{user.name.first} {user.name.last}</label>
            </React.Fragment>
          ))
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  status: state.app.status,
  users: state.app.users
});

const mapDispatchToProps = dispatch => ({
  toggleStatus: () => dispatch(appCreators.toggleStatus()),
  fetchUsers: (usersLength) => dispatch(userCreators.fetchUsers(usersLength))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
