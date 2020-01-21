import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  CheckBox,
} from 'react-native';
import {
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Header } from 'react-native-elements';
import AboutNSBE from './components/AboutNSBE';
import Curriculum from './components/Curriculum';
import Prereq from './components/Prereq';
import Events from './components/Events';
import Faculty from './components/Faculty';
import Map from './components/Map';
import Projects from './components/Projects';
import AgendaScreen from './components/Calendar';
import Icons from './icon';
import Icon from 'react-native-vector-icons/Octicons';

class Home extends React.Component {
  static navigationOptions = {
    title: 'CCNY',
  };

  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#7d55c7',
          }}
          leftComponent={<Icons navigation={this.props.navigation} />}
          centerComponent={{
            text: 'CCNY',
            style: { color: '#fff', fontSize: 40 },
          }}
        />
        <Prereq />
      </View>
    );
  }
}

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Home,
    AboutNSBE: AboutNSBE,
    Curriculum: Curriculum,
    Events: Events,
    Faculty: Faculty,
    Map: Map,
    Projects: Projects,
    Calendar: AgendaScreen,
    Prereq: Prereq,
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    height: 300,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});