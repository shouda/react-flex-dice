import React from 'react';
import cx from 'classnames';
import {arrayRange} from '../lib/utils';

const diceNumber = [
  '\u{02776}',
  '\u{02777}',
  '\u{02778}',
  '\u{02779}',
  '\u{0277A}',
  '\u{0277B}',
];
const divWidthHeight = {
  minHeight: '145px',
  minWidth: '145px',
  maxWidth: '145px',
};
const diceSize = {
  lineHeight: '45px',
  fontSize: '45px',
};
const diceSizePadding = {
  lineHeight: '45px',
  fontSize: '45px',
  padding: '0 8px 0 8px',
};

class FlexItem extends React.Component {
  render() {
    const items = arrayRange(1, this.props.items);
    const itemStyle = (this.props.items === 4 | this.props.items === 6) ? diceSizePadding : diceSize;
    return (
      <div className={this.props.classnames} style={divWidthHeight}>
        {items.map((id) => {
          const itemClasses = cx('border bg-gray', this.props.alignSelf[id - 1]);
          return <div className={itemClasses} style={itemStyle} key={id}>{diceNumber[id - 1]}</div>;
        })}
      </div>
    );
  }
  constructor(props) {
    super(props);
  }
}

FlexItem.defaultProps = {
  classnames: '',
  items: 1,
};
FlexItem.propTypes = {
  alignSelf: React.PropTypes.array,
  classnames: React.PropTypes.string,
  items: React.PropTypes.number,
};

export default FlexItem;
