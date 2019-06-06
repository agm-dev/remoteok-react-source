import React from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>Remote Jobs ({ this.props.jobs })</h1>
      </header>
    );
  }
}
