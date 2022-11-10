import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.PureComponent {
  render() {
    return (
      <div className="nav-container">
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <Link className="nav-link">BOOKS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
