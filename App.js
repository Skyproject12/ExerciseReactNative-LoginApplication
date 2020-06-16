import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '@component/Login';
import DashboardScreen from '@component/Dashboard';

const RootStack = createStackNavigator({
  Login: HomeScreen,
  Dashboard: DashboardScreen,
});

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
