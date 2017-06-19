import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Spinner } from '../components/common';
import { logoutUser } from '../actions';

class FirstTabScreen extends Component {

  onButtonPress() {
        this.props.logoutUser();
    }

    renderButton() {
      if (this.props.loading) {
        return (<Spinner />);
      }
        return (
          <Button onPress={this.onButtonPress.bind(this)}>
              Log Out
            </Button>
        );
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          First Tab Screen
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Card>          
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

const mapStateToProps = ({ auth }) => {
  const { user, loading } = auth;
  return { user, loading };
};
export default connect(mapStateToProps, { logoutUser })(FirstTabScreen);
