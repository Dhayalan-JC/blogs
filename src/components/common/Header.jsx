import React from "react";
import { nav } from "../../assets/data/data";

const Header = () => {
  const navItems = nav.map((item) => (
    <li key={item.id}>
      <a href={item.url}>{item.text}</a>
    </li>
  ));
  return (
    <>
      <header>
        <div className="container">
          <div id="topbar" className="top-bar">
            <div> Subscribe</div>
            <h1 className="title">
              <a href="/">Large</a>
            </h1>
            <div>
              <button className="btn btn-md btn-default">Sign up</button>
            </div>
          </div>
          <nav>
            <ul>{navItems}</ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
