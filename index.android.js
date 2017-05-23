/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {Button,Body,Container,Content,Footer,FooterTab,Icon,Text} from 'native-base';

export default class OrigamiMobileCenter extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
        <Text style={styles.welcome}>
          GeekyAnts
        </Text>
        <Text style={styles.instructions}>
          Origami
        </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OrigamiMobileCenter', () => OrigamiMobileCenter);
