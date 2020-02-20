import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../common/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
import { h0 } from "../common/fp";
import "./App.css";
import CitySelector from "../common/CitySelector";
import DateSelector from "../common/DateSelector.jsx";

import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartDate,
  toggleHighSpeed
} from "./actions";

function App(props) {
  const {
    from,
    to,
    isCitySelectorVisible,
    isDateSelectorVisible,
    cityData,
    isLoadingCityData,
    dispatch,
    departDate,
    highSpeed
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const cbs = useMemo(
    () =>
      bindActionCreators(
        {
          exchangeFromTo,
          showCitySelector
        },
        dispatch
      ),
    [dispatch]
  );

  const citySelectorCbs = useMemo(
    () =>
      bindActionCreators(
        {
          onBack: hideCitySelector,
          fetchCityData,
          onSelect: setSelectedCity
        },
        dispatch
      ),
    [dispatch]
  );

  const departDateCbs = useMemo(
    () =>
      bindActionCreators(
        {
          onClick: showDateSelector
        },
        dispatch
      ),
    [dispatch]
  );

  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector
      },
      dispatch
    );
  }, [dispatch]);

  const onSelectDate = useCallback(
    day => {
      if (!day || day < h0()) {
        return;
      }
      dispatch(setDepartDate(day));
      dispatch(hideDateSelector());
    },
    [dispatch]
  );

  const HighSpeedCbs = useMemo(
    () =>
      bindActionCreators(
        {
          toggle: toggleHighSpeed
        },
        dispatch
      ),
    [dispatch]
  );

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <form className="form" action="./query.html">
        <Journey from={from} to={to} {...cbs}></Journey>
        <DepartDate time={departDate} {...departDateCbs}></DepartDate>
        <HighSpeed {...HighSpeedCbs} highSpeed={highSpeed}></HighSpeed>
        <Submit></Submit>
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
      <DateSelector
        show={isDateSelectorVisible}
        {...dateSelectorCbs}
        onSelect={onSelectDate}
      />
    </div>
  );
}

export default connect(function mapStateToProps(state) {
  return state;
})(App);
