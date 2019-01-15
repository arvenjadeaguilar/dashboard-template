import React, { Component } from 'react';
import SVG from 'react-svg';
import AlignRight from '../assets/icons/AlignRight.svg'
import Box from '../assets/icons/Box.svg'
import Search from '../assets/icons/Search.svg'
import Notification from '../assets/icons/Notification.svg'
import Avatar from 'react-avatar';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/#" className="navbar-item">
              <SVG src={AlignRight} className="svg-wrapper"/>
            </a>

            <a href="/#" className="navbar-item">
              <SVG src={Box} className="svg-wrapper"/>
            </a>

            <div className="navbar-item">
              <div className="field searchBar">
                <div className="control has-icons-left ">
                  <input className="input is-rounded" type="search" placeholder="Type any cryptocurrency..."/>
                  <span className="icon is-small is-left">
                    <SVG src={Search}  className="svg-wrapper" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a href="/#" className="">
                <SVG src={Notification}  className="svg-wrapper" />
              </a>
            </div>
            <div className="navbar-item">
              <Avatar name="Arven Jade Aguilar" size="30" round={true} />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
