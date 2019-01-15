import React, { PureComponent } from 'react';
import SVG from 'react-svg';
import TabIcon from '../assets/icons/Tab.svg'

class Tab extends PureComponent {
  render() {
    let additionalClass = "";
    let {active} = this.props;
    if(active){
      additionalClass = "active"
    }
    return (
      <span className={"tab-item " + additionalClass}>
        {this.props.name} <SVG src={TabIcon}/>
      </span>
    );
  }
}

export default Tab;
