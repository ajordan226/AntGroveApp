import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currSelectedDate: null,
      currWeek: {}
      // prevWeeks:
    };

  }

  render() {
    return (
      <React.Fragment>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={(Default = Date())}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          onDayPress={day => this.setState({currSelectedDate: day})}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.updateState(text).bind(this)}
        />
      </React.Fragment>
    );
  }

  updateState(text) {

  }

  loadItems(day) {
    // const time = day.timestamp + 24 * 60 * 60 * 1000;
    // const strTime = this.timeToString(time);
    // if (!this.state.items[strTime]) {
    //   this.state.items[strTime] = [];
    //   const numItems = Math.floor(Math.random() * 5);
    //   for (let j = 0; j < numItems; j++) {
    //     this.state.items[strTime].push({
    //       name: 'Requirement for ' + strTime,
    //       height: Math.max(50, Math.floor(Math.random() * 150))
    //     });
    //   }
    // }
    // //console.log(this.state.items);
    // const newItems = {};
    // Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
    // this.setState({
    //   items: newItems
    // });
    // // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text></Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

class TextInputComponent extends CalendarScreen {
  render() {
    return(
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={
          text => this.updateStateText.bind(text),
          this.setState({currSelectedDate: null})
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
