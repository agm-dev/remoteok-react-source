import React from 'react';

export default class Job extends React.Component {
  render () {
    return (
      <div className="job">
        <p>{this.props.title} [{ this.props.tags.join(', ') }]</p>
      </div>
    )
  }
}
