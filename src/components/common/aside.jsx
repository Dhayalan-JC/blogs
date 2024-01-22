import React, { Component } from "react";

export class AsideSection extends Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <i>About</i>
              </h4>
              <p className="card-text">
                Etiam porta sem malesuada magna mollis euismod. Cras mattis
                consectetur purus sit amet fermentum nulla sed consectetur
              </p>
            </div>
          </div>
          <div className="my-4 mx-3">
            <div className="card-body">
              <h4 className="card-title pb-3">
                <i>Archives</i>
              </h4>
              <ul>
                <li>
                  <a href="/">March 2014</a>
                </li>
                <li>
                  <a href="/">February 2014</a>
                </li>
                <li>
                  <a href="/">January 2014</a>
                </li>
                <li>
                  <a href="/">December 2013</a>
                </li>
                <li>
                  <a href="/">November 2013</a>
                </li>
                <li>
                  <a href="/">October 2013</a>
                </li>
                <li>
                  <a href="/">September 2013</a>
                </li>
                <li>
                  <a href="/">August 2013</a>
                </li>
                <li>
                  <a href="/">July 2013</a>
                </li>
                <li>
                  <a href="/">June 2013</a>
                </li>
                <li>
                  <a href="/">May 2013</a>
                </li>
                <li>
                  <a href="/">April 2013</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-4 mx-3">
            <div className="card-body">
              <h4 className="card-title pb-3">
                <i>Else</i>
              </h4>
              <ul>
                <li>
                  <a href="/">Github</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AsideSection;
