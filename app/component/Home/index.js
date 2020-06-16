import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

class HomeScreen extends Component {
  goToDashboardScreen() {
    this.props.navigation.navigate('Dashboard');
  }
  render() {
    return (
      <View>
        <Text>Login into the application</Text>
        <TextInput placeholder="enter your name" />
        <TextInput placeholder="enter your password" />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

export default HomeScreen;
