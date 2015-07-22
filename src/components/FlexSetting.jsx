import React from 'react';

class FlexSetting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="m1 flex flex-column">
        <div className="border-bottom">
        <div className="col col-3">
            flex-direction: <span className="h6">(排列方向)</span>
          <br /><span className="olive">{this.props.cssValue.direction}</span>
          </div>
          <div className="col col-9">
            <button className="h5 btn btn-outline maroon p1 m1" name="direction" value="flex-row"
              disabled={this.props.cssValue.direction === 'row'}
              onClick={this.handleStyle.bind(this)}>row</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="direction" value="flex-column"
              disabled={this.props.cssValue.direction === 'column'}
              onClick={this.handleStyle.bind(this)}>column</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="direction" value="flex-rowr"
                disabled={this.props.cssValue.direction === 'row-reverse'}
                onClick={this.handleStyle.bind(this)}>row-reverse</button>
              <button className="h5 btn btn-outline maroon p1 m1" name="direction" value="flex-columnr"
                disabled={this.props.cssValue.direction === 'column-reverse'}
                onClick={this.handleStyle.bind(this)}>column-reverse</button>
          </div>
        </div>
        <div className="border-bottom">
          <div className="col col-3">
            flex-wrap: <span className="h6">(換行)</span>
          <br /><span className="olive">{this.props.cssValue.wrap}</span>
          </div>
          <div className="col col-9">
            <button className="h5 btn btn-outline maroon p1 m1" name="wrap" value="flex-nowrap"
              disabled={this.props.cssValue.wrap === 'nowrap'}
              onClick={this.handleStyle.bind(this)}>nowrap</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="wrap" value="flex-wrap"
              disabled={this.props.cssValue.wrap === 'wrap'}
              onClick={this.handleStyle.bind(this)}>wrap</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="wrap" value="flex-wrapr"
              disabled={this.props.cssValue.wrap === 'wrap-reverse'}
              onClick={this.handleStyle.bind(this)}>wrap-reverse</button>
          </div>
        </div>
        <div className="border-bottom">
          <div className="col col-3">
            justify-content: <span className="h6">(左右對齊)</span>
          <br /><span className="olive">{this.props.cssValue.justify}</span>
          </div>
          <div className="col col-9">
            <button className="h5 btn btn-outline maroon p1 m1" name="justify" value="flex-jstart"
              disabled={this.props.cssValue.justify === 'flex-start'}
              onClick={this.handleStyle.bind(this)}>flex-start</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="justify" value="flex-jend"
              disabled={this.props.cssValue.justify === 'flex-end'}
              onClick={this.handleStyle.bind(this)}>flex-end</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="justify" value="flex-jcenter"
              disabled={this.props.cssValue.justify === 'center'}
              onClick={this.handleStyle.bind(this)}>center</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="justify" value="flex-justify"
              disabled={this.props.cssValue.justify === 'space-between'}
              onClick={this.handleStyle.bind(this)}>space-between</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="justify" value="flex-jaround"
              disabled={this.props.cssValue.justify === 'space-around'}
              onClick={this.handleStyle.bind(this)}>space-around</button>
          </div>
        </div>
        <div className="border-bottom">
          <div className="col col-3">
            align-items: <span className="h6">(垂直對齊)</span>
          <br /><span className="olive">{this.props.cssValue.alignItems}</span>
          </div>
          <div className="col col-9">
            <button className="h5 btn btn-outline maroon p1 m1" name="alignItems" value="flex-stretch"
              disabled={this.props.cssValue.alignItems === 'stretch'}
              onClick={this.handleStyle.bind(this)}>stretch</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignItems" value="flex-start"
              disabled={this.props.cssValue.alignItems === 'flex-start'}
              onClick={this.handleStyle.bind(this)}>flex-start</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignItems" value="flex-end"
              disabled={this.props.cssValue.alignItems === 'flex-end'}
              onClick={this.handleStyle.bind(this)}>flex-end</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignItems" value="flex-center"
              disabled={this.props.cssValue.alignItems === 'center'}
              onClick={this.handleStyle.bind(this)}>center</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignItems" value="flex-baseline"
              disabled={this.props.cssValue.alignItems === 'baseline'}
              onClick={this.handleStyle.bind(this)}>baseline</button>
          </div>
        </div>
        <div>
          <div className="col col-3">
            align-content: <span className="h6">(多行對齊)</span>
          <br /><span className="olive">{this.props.cssValue.alignContent}</span>
          </div>
          <div className="col col-9">
            <button className="h5 btn btn-outline maroon p1 m1" name="alignContent" value="flex-astretch"
              disabled={this.props.cssValue.alignContent === 'stretch'}
              onClick={this.handleStyle.bind(this)}>stretch</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignContent" value="flex-astart"
              disabled={this.props.cssValue.alignContent === 'flex-start'}
              onClick={this.handleStyle.bind(this)}>flex-start</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignContent" value="flex-aend"
              disabled={this.props.cssValue.alignContent === 'flex-end'}
              onClick={this.handleStyle.bind(this)}>flex-end</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignContent" value="flex-acenter"
              disabled={this.props.cssValue.alignContent === 'center'}
              onClick={this.handleStyle.bind(this)}>center</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignContent" value="flex-abetween"
              disabled={this.props.cssValue.alignContent === 'space-between'}
              onClick={this.handleStyle.bind(this)}>space-between</button>
            <button className="h5 btn btn-outline maroon p1 m1" name="alignContent" value="flex-aaround"
              disabled={this.props.cssValue.alignContent === 'space-around'}
              onClick={this.handleStyle.bind(this)}>space-around</button>
          </div>
        </div>
        <div className="clearfix">
          <div className="col col-12 border-bottom">&nbsp;</div>
        </div>
      </div>
    );
  }
  handleStyle(e) {
    this.props.onStyleChange(e.currentTarget.name, e.currentTarget.value);
  }
}

FlexSetting.defaultProps = {};
FlexSetting.propTypes = {
  cssValue: React.PropTypes.object,
  onStyleChange: React.PropTypes.func,
};

export default FlexSetting;
