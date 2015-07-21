import React from 'react';
import cx from 'classnames';

import FlexItem from './FlexItem';
import FlexSetting from './FlexSetting';
import FlexItemSetting from './FlexItemSetting';

const styleFlexbox = {
  'mx-auto': true,
  border: true,
  'bg-silver': true,
  flex: true,
};
const origCssValue = {
  direction: {
    'flex-row': 'row',
    'flex-column': 'column',
    'flex-rowr': 'row-reverse',
    'flex-columnr': 'column-reverse',
  },
  wrap: {
    'flex-nowrap': 'nowrap',
    'flex-wrap': 'wrap',
    'flex-wrapr': 'wrap-reverse',
  },
  justify: {
    'flex-jstart': 'flex-start',
    'flex-jend': 'flex-end',
    'flex-jcenter': 'center',
    'flex-justify': 'space-between',
    'flex-jaround': 'space-around',
  },
  alignItems: {
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    'flex-center': 'center',
    'flex-stretch': 'stretch',
    'flex-baseline': 'baseline',
  },
  alignContent: {
    'flex-astart': 'flex-start',
    'flex-aend': 'flex-end',
    'flex-acenter': 'center',
    'flex-abetween': 'space-between',
    'flex-aaround': 'space-around',
    'flex-astretch': 'stretch',
  },
  alignSelf: {
    'flex-sauto': 'auto',
    'flex-sstart': 'flex-start',
    'flex-send': 'flex-end',
    'flex-scenter': 'center',
    'flex-sbaseline': 'baseline',
    'flex-sstretch': 'stretch',
  },
};

class Flex extends React.Component {
  render() {
    const flexbox = cx(styleFlexbox, this.state.direction, this.state.wrap, this.state.justify, this.state.alignItems, this.state.alignContent);
    return (
      <div className="border">
        <div className="h3 p2 bg-gray">CSS Flexbox Demo by React.js</div>
        <FlexSetting cssValue={this.state.cssValue} onStyleChange={this.handleStyle.bind(this)} />
        <div className="container">
          <div className="clearfix">
            <div className="col col-2 p1">
              <FlexItem classnames={flexbox} items={this.state.items} alignSelf={this.state.alignSelf} />
            </div>
            <div className="col col-10 align-top">
              <FlexItemSetting cssValue={origCssValue.alignSelf}
                items={this.state.items} onItemsChange={this.handleItems.bind(this)}
                alignSelf={this.state.alignSelf} onSelfChange={this.handleSelf.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleItems(v) {
    this.setState({items: v});
    switch (v) {
    case 1:
      this.setState({
        direction: {},
        wrap: {'flex-nowrap': true},
        justify: {'flex-jcenter': true},
        alignItems: {'flex-center': true},
        alignContent: {'flex-astretch': true},
      });
      this.setState({
        cssValue: {
          direction: 'row',
          wrap: 'nowrap',
          justify: 'center',
          alignItems: 'center',
          alignContent: 'stretch'},
      });
      this.setState({
        alignSelf: ['flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto'],
      });
      break;
    case 2:
      this.setState({
        direction: {},
        wrap: {'flex-nowrap': true},
        justify: {'flex-justify': true},
        alignItems: {'flex-stretch': true},
        alignContent: {'flex-astretch': true},
      });
      this.setState({
        cssValue: {
          direction: 'row',
          wrap: 'nowrap',
          justify: 'space-between',
          alignItems: 'stretch',
          alignContent: 'stretch'},
      });
      this.setState({
        alignSelf: ['flex-send', 'flex-sstart', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto'],
      });
      break;
    case 3:
      this.setState({
        direction: {},
        wrap: {'flex-nowrap': true},
        justify: {'flex-justify': true},
        alignItems: {'flex-stretch': true},
        alignContent: {'flex-astretch': true},
      });
      this.setState({
        cssValue: {
          direction: 'row',
          wrap: 'nowrap',
          justify: 'space-between',
          alignItems: 'stretch',
          alignContent: 'stretch'},
      });
      this.setState({
        alignSelf: ['flex-send', 'flex-scenter', 'flex-sstart', 'flex-sauto', 'flex-sauto', 'flex-sauto'],
      });
      break;
    case 4:
      this.setState({
        direction: {},
        wrap: {'flex-wrap': true},
        justify: {'flex-justify': true},
        alignItems: {'flex-stretch': true},
        alignContent: {'flex-abetween': true},
      });
      this.setState({
        cssValue: {
          direction: 'row',
          wrap: 'wrap',
          justify: 'space-between',
          alignItems: 'stretch',
          alignContent: 'space-between'},
      });
      this.setState({
        alignSelf: ['flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto'],
      });
      break;
    case 5:
      this.setState({
        direction: {},
        wrap: {'flex-wrap': true},
        justify: {'flex-justify': true},
        alignItems: {'flex-stretch': true},
        alignContent: {'flex-astretch': true},
      });
      this.setState({
        cssValue: {
          direction: 'row',
          wrap: 'wrap',
          justify: 'space-between',
          alignItems: 'stretch',
          alignContent: 'stretch'},
      });
      this.setState({
        alignSelf: ['flex-sstart', 'flex-send', 'flex-sstart', 'flex-sstart', 'flex-sstart', 'flex-sauto'],
      });
      break;
    case 6:
      this.setState({
        direction: {},
        wrap: {'flex-wrap': true},
        justify: {'flex-justify': true},
        alignItems: {'flex-stretch': true},
        alignContent: {'flex-astretch': true},
      });
      this.setState({
        cssValue: {
          direction: 'row',
          wrap: 'wrap',
          justify: 'space-between',
          alignItems: 'stretch',
          alignContent: 'stretch'},
      });
      this.setState({
        alignSelf: ['flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto'],
      });
      break;
    default:
      break;
    }
  }
  handleSelf(v) {
    this.setState({alignSelf: v});
  }
  handleStyle(key, style) {
    const cssValue = this.state.cssValue;
    cssValue[key] = origCssValue[key][style];
    this.setState({cssValue: cssValue});
    this.setState({[key]: {[style]: true}});
  }
  constructor() {
    super();
    this.state = {
      direction: {},
      wrap: {'flex-nowrap': true},
      justify: {'flex-jcenter': true},
      alignItems: {'flex-center': true},
      alignContent: {'flex-aastretch': true},
      alignSelf: ['flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto', 'flex-sauto'],
      cssValue: {
        direction: 'row',
        wrap: 'nowrap',
        justify: 'center',
        alignItems: 'center',
        alignContent: 'stretch',
      },
      items: 1,
    };
  }
}

export default Flex;
