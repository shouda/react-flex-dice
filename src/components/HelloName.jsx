import React from 'react';

class HelloName extends React.Component {
  render() {
    return (
      <div className="p2 fuchsia">Hello, {this.props.name}</div>
    );
  }
  constructor(props) {
    super(props);
  }
}

HelloName.defaultProps = {name: 'Guest'};
HelloName.propTypes = {name: React.PropTypes.string};

export default HelloName;
