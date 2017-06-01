import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
    return (
      <div id="nav">
        <h2>React Weather</h2>
        <IndexLink to="/" activeClassName="active"
        className="link">Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" className="link">About</Link>
        <Link to="/examples" activeClassName="active" className="link">Examples</Link>
      </div>
    );
  }

export default Nav;
