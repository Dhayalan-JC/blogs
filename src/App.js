import React, { Component } from "react";
import Header from "./components/common/Header";
import { Footer } from "./components/common/Footer";
// import { Layout } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";
import PostDetails from "./components/PostDetails/PostDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
          <Header />
          <main className="container mt-0 pt-0">
            <div className="d-md-flex">
              <div className="col-sm-12">
                <Routes>
                  <Route exact path="/" element={<CreatePost />}></Route>
                  <Route path="/postdetails" element={<PostDetails />}></Route>
                </Routes>
              </div>
            </div>
          </main>
          <Footer />
        </Router>
      </>
    );
  }
}
export default App;
