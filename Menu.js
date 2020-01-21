import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class Menu extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style = {width: '20%'}>
               <Picker.Item label = "About NSBE" value = "NSBE" />
               <Picker.Item label = "Curriculum" value = "Curriculum" />
               <Picker.Item label = "Professors" value = "Professors" />
               <Picker.Item label = "Map" value = "Map" />
               <Picker.Item label = "Student projects" value = "Student projects" />
               <Picker.Item label = "Calender" value = "Calender" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default Menu

const styles = StyleSheet.create({
   container: {
      alignItems: 'center'
   },
   text: {
      marginTop: 100,
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})