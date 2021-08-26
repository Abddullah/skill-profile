import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';
const RootContainer = () => {
  useEffect(() => {
    console.disableYellowBox = true
  }, [])
  return (
      <StackNavigation />
  )
};

const mapStateToProp = ({ root }) => ({
});
const mapDispatchToProp = (dispatch) => ({
});
export default connect(mapStateToProp, mapDispatchToProp)(RootContainer)