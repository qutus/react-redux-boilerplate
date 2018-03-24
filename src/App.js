import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1>React boilerplate</h1>
        <label>Status is { this.props.status ? 'true' : 'false' }</label>
        <br />
        <button onClick={this.props.toggleStatus}>Toggle status</button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  status: state.app.status
});

const mapDispatchToProps = dispatch => ({
  toggleStatus: () => dispatch({ type: 'TOGGLE_STATUS' })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
