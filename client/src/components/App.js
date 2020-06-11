import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";
import Header from "./Header";
import * as actions from "../actions";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Switch>
              <Header />
              {/* <Route path="/" exact component={} />
              <Route path="/surveys" exact component={} />
              <Route path="/surveys/new" exact component={} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { alo: null };
};

export default connect(null, actions)(App);
