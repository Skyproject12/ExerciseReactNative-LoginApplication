import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import styles from './style';

class HomeScreen extends Component {
  state = {
    username: '',
    password: '',
    status: false,
  };

  static navigationOptions = {
    headerVisible: false,
  };

  checkLogin() {
    const {username, password} = this.state;
    if (username === 'admin' && password === 'admin') {
      this.setState({
        status: false,
      });
      this.props.navigation.navigate('Dashboard', {name: 'sumendra'});
    }
    this.setState({
      status: true,
    });
  }

  render() {
    const {
      heading,
      input,
      viewButton,
      description,
      messageText,
      messageView,
    } = styles;
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
        <View style={messageView}>
          {this.state.status && (
            <Text style={messageText}>
              Tolong Check Kembali username dan password
            </Text>
          )}
        </View>
      </View>
    );
  }
}

export default HomeScreen;
