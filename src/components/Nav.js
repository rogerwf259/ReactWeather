import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
    onSearch(e) {
      e.preventDefault();
      alert('Not yet wired up');
    }
    render() {
    return (
      <div id="nav" className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <IndexLink to="/" activeClassName="active"
              className="link">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" className="link">About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" className="link">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
