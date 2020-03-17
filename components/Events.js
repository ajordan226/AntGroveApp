import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Tabs, Tab, TabHeading } from 'native-base';
import Tab1 from './UpcomingEvents';
import Tab2 from './ProfessionalEvents';
import Tab3 from './GoogleForm';

export default class Events extends Component {
  render() {
    return (
    <Container style = {{backgroundColor: "#8b4513"}}>
      <Header style = {{borderRadius: 20, backgroundColor: "#2f4f4f"}}>
         <Left>
           <Button transparent>
              <Icon name='menu' onPress={() => {this.props.navigation.toggleDrawer();}} />
           </Button>
         </Left>
         <Body>
           <Title style = {{fontSize: 20}}>Upcoming Events</Title>
         </Body>
         <Right>
           <Button transparent>
               <Icon name="person"/>
           </Button>
         </Right>
      </Header>
      <Tabs>
        <Tab heading={ <TabHeading style = {{color: "transparent"}}><Icon name="calendar" /><Text style = {{fontSize: 15, color: "#fff"}}>  Monthly</Text></TabHeading>}>
          <Tab1 />
        </Tab>
        <Tab heading={ <TabHeading style = {{backgroundColor: "transparent"}}><Icon name="clock" /><Text style = {{fontSize: 15, color: "#fff"}}>  Professional</Text></TabHeading>}>
          </Tab>
        <Tab heading={ <TabHeading style = {{backgroundColor: "transparent"}}><Icon name="cloud-upload" /><Text style = {{fontSize: 15, color: "#fff"}}>  Submit</Text></TabHeading>}>
           <Tab3 />
        </Tab>
      </Tabs>
    </Container>
    );
  }
}
