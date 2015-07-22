import React from 'react';

class Dummy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      </div>
    );
  }
  handleChange(e) {
    this.props.onValueChange(e.currentTarget.value);
  }
  handleClick() {
    this.props.onElementClick();
  }
}

Dummy.defaultProps = {
  name: '',
};
Dummy.propTypes = {
  name: React.PropTypes.string,
  onElementClick: React.PropTypes.func,
  onValueChange: React.PropTypes.func,
};

export default Dummy;
