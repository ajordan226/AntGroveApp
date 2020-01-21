import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  CheckBox,
} from 'react-native';
import { Header } from 'react-native-elements';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';

export default class Icons extends React.Component {
  render(){
    return (
      <Icon
                  name = "three-bars"
                  color = "white"
                  style = {{fontSize: 25}}
                   onPress={() => {
                    this.props.navigation.toggleDrawer();
                  }}/>
    );
  }
}