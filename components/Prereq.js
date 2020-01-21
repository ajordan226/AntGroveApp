import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card, CheckBox, Header, Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';


export default class Prereq extends React.Component {
  state = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false
  }

  render() {
    return (
      <React.Fragment>

        <ScrollView>
            <Card title='Getting into Grove School of Engineering'
                  titleStyle ={{fontSize: 30}}>
            </Card>


          <Card title='Satisfaction of the Grove School freshman admission criteria '>
            <View style={{flexDirection: 'column'}}>
              <CheckBox
                title='An overall high school average of 85% or better'
                checkedColor = 'green'
                checked={this.state.one}
                onIconPress={() => this.setState({one: !this.state.one})}
              />

              <CheckBox
                title='Two years of English'
                checkedColor = 'green'
                checked={this.state.two}
                onIconPress={() => this.setState({two: !this.state.two})}
              />

              <CheckBox
                title='Four years of high school mathematics, including pre-calculus, with an average of 80% or better'
                checkedColor = 'green'
                checked={this.state.three}
                onIconPress={() => this.setState({three: !this.state.three})}
              />

              <CheckBox
                title='Three years of science, including:One year of physics, with a grade of 80% or better One year of chemistry with a grade of 80% or better'
                checkedColor = 'green'
                checked={this.state.four}
                onIconPress={() => this.setState({four: !this.state.four})}
              />

            </View>
          </Card>

          <Card>
            <View style={{flexDirection: 'column'}}>
              <CheckBox
                title='A minimum overall GPA of 2.7 in college courses'
                checkedColor = 'green'
                checked={this.state.five}
                onIconPress={() => this.setState({five: !this.state.five})}
              />
            </View>
          </Card>


          <Card>
            <View style={{flexDirection: 'column'}}>
              <CheckBox
                title='A minimum 2.5 GPA in college math and science courses, with no grade below a "C"'
                checkedColor = 'green'
                titleStyle = {{fontSize: 20}}
                checked={this.state.six}
                onIconPress={() => this.setState({six: !this.state.six})}
              />
            </View>
          </Card>

          <Card>
             <View style={{flexDirection: 'column'}}>
                <CheckBox
                   title='Completed two semesters of calculus with a grade of "C" or better'
                   checkedColor = 'green'
                   checked={this.state.seven}
                   onIconPress={() => this.setState({seven: !this.state.seven})}
                />
             </View>
          </Card>

          <Card>
             <View style={{flexDirection: 'column'}}>
                <CheckBox
                   title='Demonstrated proficiency in math and science, evidenced by student transcript'
                   checkedColor = 'green'
                   style={{fontSize: 30}}
                   checked={this.state.eight}
                   onIconPress={() => this.setState({eight: !this.state.eight})}
                />
             </View>
          </Card>

          <Card>
            <View style={{flexDirection: 'column'}}>
              <CheckBox
                  title='Completed 24 or more college credits'
                  checkedColor = 'green'
                  checked={this.state.nine}
                  onIconPress={() => this.setState({nine: !this.state.nine})}
              />
            </View>
          </Card>

        </ScrollView>
      </React.Fragment>
    );
  }
}
