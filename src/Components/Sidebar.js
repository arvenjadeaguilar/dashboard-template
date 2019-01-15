import React, { Component } from 'react';
import Logo from '../assets/logo/logo.png'
import SVG from 'react-svg';

import Home from '../assets/icons/Home.svg'
import Exchange from '../assets/icons/Exchange.svg'
import Wallet from '../assets/icons/Wallet.svg'
import Tradeview from '../assets/icons/Tradeview.svg'


class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="app-brand">
          <img src={Logo} alt="logo"/>
        </div>
        <aside className="menu">
          <span className="menu-label">
            Quick Access
          </span>
          <ul className="menu-list">
            <li><a href="/#"> <span><SVG src={Home} className="svg-wrapper"/></span> Dashboard</a></li>
            <li><a href="/#"> <span><SVG src={Exchange} className="svg-wrapper"/></span> Exchange</a></li>
            <li><a href="/#"> <span><SVG src={Wallet} className="svg-wrapper"/></span> My Wallet</a></li>
            <li><a href="/#"> <span><SVG src={Tradeview} className="svg-wrapper"/></span> Tradeview</a></li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
