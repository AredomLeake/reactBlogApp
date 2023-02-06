import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="nav">
      <form className="form" onSubmit={(e) => e.preventDeafault()}>
        <label htmlFor="search">search pst</label>
        <input
          type="text"
          id="search"
          placeholder="search for post"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/about ">About</Link>
          </li>
        </ul>
      </form>
    </nav>
  );
};

export default Nav;
