import React from 'react';
import { Router, Scene, } from 'react-native-router-flux';
import SkillProfile from "../screens/SkillProfileScreen/Index";
import Login from "../screens/Login/index";
import ForgotPassword from "../screens/ForgotPassword/index";
import Signup from "../screens/Signup/index";
import AppContainer from "../screens/AppContainer/index";
import RespondentsScreen from "../screens/RespondentsScreen/index"

export default Route = () => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#f27500" }}
      titleStyle={{ color: "white" }}
      tintColor="white">
      <Scene>
        <Scene key='SkillProfile' component={SkillProfile} hideNavBar={true} initial />
        <Scene key='Login' component={Login} hideNavBar={true} />
        <Scene key='ForgotPassword' component={ForgotPassword} hideNavBar={true} />
        <Scene key='Signup' component={Signup} hideNavBar={true} />
        <Scene key='AppContainer' component={AppContainer} hideNavBar={true} />
        <Scene key='RespondentsScreen' component={RespondentsScreen} hideNavBar={true} />
      </Scene>
    </Router>
  );
}