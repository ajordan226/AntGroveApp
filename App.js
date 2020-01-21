import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import { Button } from 'native-base';

class Splash extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.titleSplash}>WELCOME TO GROVE APP</Text>
        <Button
          style={styles.btntake}
          onPress={() => this.props.navigation.replace('Details')}>
          <Text style={styles.textbtn}>Let's Start</Text>
        </Button>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: Splash,
    Details: Home,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  mainbody: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 70,
    backgroundColor: '#0000',
  },
  titleSplash: {
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 55,
    marginTop: 20,
    color: '#3E4993',
  },
  btntake: {
    width: 240,
    height: 45,
    borderRadius: 200,
    backgroundColor: '#7d55c7',
    marginTop: 30,
    marginLeft: 45,
  },
  textbtn: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 240,
  },
});
