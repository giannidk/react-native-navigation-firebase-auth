import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from '../components/LoginForm';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>      
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
};

export default LoginScreen;
