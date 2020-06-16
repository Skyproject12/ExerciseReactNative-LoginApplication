import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import styles from './style';

class HomeScreen extends Component {
  goToDashboardScreen() {
    this.props.navigation.navigate('Dashboard');
  }

  state = {
    username: '',
    password: '',
  };

  checkLogin() {
    const {username, password} = this.state;
    if (username === 'admin' && password === 'admin') {
      console.log('masuk');
    }
    console.log('hasilnya', username, password);
  }
  render() {
    const {heading, input, viewButton, description} = styles;
    return (
      <View style>
        <Text style={heading}>Login</Text>
        <Text style={description}>Login into the application</Text>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          style={input}
          placeholder="enter your name"
        />
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
          style={input}
          placeholder="enter your password"
        />
        <View style={viewButton}>
          <Button title="Login" onPress={() => this.checkLogin()} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
