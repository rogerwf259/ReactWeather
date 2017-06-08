import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
    onSearch(e) {
      e.preventDefault();

      var location = this.refs.search.value;
      var econdedLocation = encodeURIComponent(location);

      if (location.length > 0) {
        this.refs.search.value = '';
        window.location.hash = `#/?location=${econdedLocation}`;
      }
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
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className="menu">
              <li>
                <input
                  type="search"
                  ref="search"
                  placeholder="Search weather by city"
                />
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
