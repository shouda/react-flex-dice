import React from 'react';
import {arrayRange} from '../lib/utils';

const divHeight = {
  minHeight: '180px',
};
const diceNumber = [
  '\u{02780}',
  '\u{02781}',
  '\u{02782}',
  '\u{02783}',
  '\u{02784}',
  '\u{02785}',
];

class FlexItemSetting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = arrayRange(1, this.props.items);
    return (
      <div>
        <div className="h3 pb2">選擇骰子 Dice</div>
        <div>
          <button className="h1 btn btn-primary bg-olive" value="1" disabled={this.props.items === 1}
            onClick={this.handleItems.bind(this)}>&#9856;</button> &nbsp;
          <button className="h1 btn btn-primary bg-olive" value="2" disabled={this.props.items === 2}
            onClick={this.handleItems.bind(this)}>&#9857;</button> &nbsp;
          <button className="h1 btn btn-primary bg-olive" value="3" disabled={this.props.items === 3}
            onClick={this.handleItems.bind(this)}>&#9858;</button> &nbsp;
          <button className="h1 btn btn-primary bg-olive" value="4" disabled={this.props.items === 4}
            onClick={this.handleItems.bind(this)}>&#9859;</button> &nbsp;
          <button className="h1 btn btn-primary bg-olive" value="5" disabled={this.props.items === 5}
            onClick={this.handleItems.bind(this)}>&#9860;</button> &nbsp;
          <button className="h1 btn btn-primary bg-olive" value="6" disabled={this.props.items === 6}
            onClick={this.handleItems.bind(this)}>&#9861;</button>
        </div>
        <div style={divHeight}>
          <div className="m1">align-self: <span className="h6">(個別元件的對齊方式)</span></div>
          <div className="m1 flex flex-column">
            {items.map((id) => {
              const cssValue = this.props.cssValue[this.props.alignSelf[id - 1]];
              return (
                <div className="border-top" key={id}>
                  <div className="col col-2 olive">{diceNumber[id - 1]} {cssValue}</div>
                  <div className="col col-10">
                    <button className="h6 btn btn-outline maroon pmini mmini" name={id} value="flex-sauto"
                      disabled={cssValue === 'auto'}
                      onClick={this.handleStyle.bind(this)}>auto</button>
                    <button className="h6 btn btn-outline maroon pmini mmini" name={id} value="flex-sstart"
                      disabled={cssValue === 'flex-start'}
                      onClick={this.handleStyle.bind(this)}>flex-start</button>
                    <button className="h6 btn btn-outline maroon pmini mmini" name={id} value="flex-send"
                      disabled={cssValue === 'flex-end'}
                      onClick={this.handleStyle.bind(this)}>flex-end</button>
                    <button className="h6 btn btn-outline maroon pmini mmini" name={id} value="flex-scenter"
                      disabled={cssValue === 'center'}
                      onClick={this.handleStyle.bind(this)}>center</button>
                    <button className="h6 btn btn-outline maroon pmini mmini" name={id} value="flex-sbaseline"
                      disabled={cssValue === 'baseline'}
                      onClick={this.handleStyle.bind(this)}>baseline</button>
                    <button className="h6 btn btn-outline maroon pmini mmini" name={id} value="flex-sstretch"
                      disabled={cssValue === 'stretch'}
                      onClick={this.handleStyle.bind(this)}>stretch</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  handleItems(e) {
    const n = parseInt(e.currentTarget.value, 10);
    this.props.onItemsChange(n);
  }
  handleStyle(e) {
    const style = this.props.alignSelf;
    style[parseInt(e.currentTarget.name, 10) - 1] = e.currentTarget.value;
    this.props.onSelfChange(style);
  }
}

FlexItemSetting.defaultProps = {
  items: 1,
};
FlexItemSetting.propTypes = {
  alignSelf: React.PropTypes.array,
  cssValue: React.PropTypes.object,
  onItemsChange: React.PropTypes.func,
  onSelfChange: React.PropTypes.func,
  items: React.PropTypes.number,
};

export default FlexItemSetting;
