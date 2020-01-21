import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  CheckBox,
} from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';




export default class AboutNSBE extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {{fontSize: 25}}>NSBE is the best baby. YKTV</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
});
