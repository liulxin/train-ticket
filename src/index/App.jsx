import React, { useCallback } from "react";
import { connect } from "react-redux";

import Header from "../common/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";

import "./App.css";

function App(props) {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <Journey></Journey>
      <DepartDate></DepartDate>
      <HighSpeed></HighSpeed>
      <Submit></Submit>
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {};
  }
)(App);
