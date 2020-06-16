import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './app/component/Home';
import DashboardScreen from './app/component/Dashboard';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Dashboard: DashboardScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
