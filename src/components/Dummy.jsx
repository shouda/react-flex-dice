import React from 'react';

class Dummy extends React.Component {
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
  constructor(props) {
    super(props);
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
