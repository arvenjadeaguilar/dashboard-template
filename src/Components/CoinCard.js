import React, { PureComponent } from 'react';
import SVG from 'react-svg';
import ArrowDown from '../assets/icons/ArrowDown.svg'

class CoinCard extends PureComponent {
  render() {
    let {icon,coinAlias,coinName,value,percentage} = this.props;
    let status = "";
    if(percentage > 0){
      status = "positive"
    }else{
      status = "negative"
    }
    return (
      <div className="box coinCard">
        <div className="coin">
          <div className="coinTitle">
            <SVG src={icon}/>
            <div>
              <div className="title">{coinAlias}</div>
              <div className="subtitle">{coinName}</div>
            </div>
            
          </div>
          <div className="coinTitle">
            <div>
              <div className="title coinValue ">¥ {value}</div>
    <div className={"subtitle coinPercentage " + status}>{percentage} {percentage>0?<SVG src={ArrowDown}/>:<SVG src={ArrowDown}/>} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinCard;
