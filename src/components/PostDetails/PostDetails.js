import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import AsideSection from "../common/aside";
import PostSection from "./PostSection";

export class PostDetails extends Component {
  render() {
    return (
      <>
        <div className="post-details">
          <div className="jumbportan">
            <div className="col-sm-6">
              <h1>Title of a longer</h1>
              <h3>featured blog post</h3>
              <p>
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what's most interesting in this
                post's contents.
              </p>
              <Button variant="transparent" className="mt-4">
                Continue reading ...
              </Button>
            </div>
          </div>
          <div className="container p-0">
            <div className="row">
              <div className="col-sm-6 mr-2 py-2">
                <div className="card">
                  <div className="card-body p-0 d-flex">
                    <div className="col-sm-6 p-4">
                      <div>World</div>
                      <div className="card-title">
                        <h2>Featured post</h2>
                      </div>
                      <div className="card-topic"></div>
                      <div className="date"></div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/">Continue Reading...</a>
                    </div>
                    <div
                      className="col-sm-6"
                      style={{ background: "#2d2d2d" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 ml-2 py-2">
                <div className="card">
                  <div className="card-body p-0 d-flex">
                    <div className="col-sm-6 p-4">
                      <div>Design</div>
                      <div className="card-title">
                        <h2>Post Title</h2>
                      </div>
                      <div className="card-topic"></div>
                      <div className="date"></div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/">Continue Reading...</a>
                    </div>
                    <div
                      className="col-sm-6"
                      style={{ background: "#2d2d2d" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm-8">
                <PostSection />
              </div>
              <div className="col-sm-4 mr-0">
                <AsideSection />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostDetails;
