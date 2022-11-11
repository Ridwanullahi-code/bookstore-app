import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.PureComponent {
  render() {
    return (
      <div className="nav-container">
        <nav className="navbar">
          <Link className="web-logo" to="/">
            BookStore CMS
          </Link>
          <ul className="nav-items">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                BOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                CATEGORIES
              </Link>
            </li>
          </ul>
        </nav>
        <i className="fa-solid fa-user user" />
      </div>
    );
  }
}

export default Navbar;
