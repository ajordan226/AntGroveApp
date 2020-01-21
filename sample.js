/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

import React, { Component } from 'react'; 
import { StatusBar, StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import Images from './image.js';
import Menu from '.Menu.js';

export default class NSBEapp extends Component {
  state = {
      requirements: [
         {'prerequisite': 'Satisfaction of the Grove School freshman admission criteria\n\t\t' +
          'An overall high school average of 85% or better\n\t\t' +
          'Two years of English\n\t\t' +
          'Four years of high school mathematics, including pre-calculus, with an average of 80% or better\n\t\t' +
          'Three years of science, including:\n\t\t' +
          'One year of physics, with a grade of 80% or better\n\t\t' + 
          'One year of chemistry with a grade of 80% or better\n\t\t.' +
          '(The physics and chemistry requirements may each be substituted by a year-long college-level non-calculus-based course.)', 'id': 1},
         {'prerequisite': 'A minimum overall GPA of 2.7 in college courses', 'id': 2},
         {'prerequisite': 'A minimum 2.5 GPA in college math and science courses, with no grade below a "C"', 'id': 3},
         {'prerequisite': 'Completed two semesters of calculus with a grade of "C" or better', 'id': 4},
         {'prerequisite': 'Demonstrated proficiency in math and science, evidenced by student transcript', 'id': 5},
         {'prerequisite': 'Completed 24 or more college-level credits.', 'id': 6}
      ]
   }
   render() {
      return (
         <View>
            <Images/>
            <Menu/>
            <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>
            <ScrollView style = {{marginTop: 40}}>
               {
                  this.state.requirements.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.prerequisite}</Text>
                     </View>
                  ))

               }
            </ScrollView>
         </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: 'white'
   }
})