import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Button, Icon, Left, Body, Title, Tab, Tabs, TabHeading, StyleProvider } from 'native-base';

export default class Tab1 extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
    loading: true,
    dataSource:[]
   };
 }
 componentDidMount(){
 fetch("https://sheet.best/api/sheets/0663b973-068d-4393-a929-8c0ed1e02665")
 .then(response => response.json())
 .then((responseJson)=> {
   this.setState({
    loading: false,
    dataSource: responseJson
   })
 })
 .catch(error=>console.log(error))
 }

 renderItem=(data)=>
    <View style = {{flex: 1, flexDirection: "row", alignItems: "stretch", justifyContent: "space-evenly"}}>
         <Content>
           <Card style={{backgroundColor:"transparent", flex: 1, width: 210, borderRadius: 9}}>
             <CardItem header style={{backgroundColor:"transparent"}}>
                   <Text style = {styles.size}>{data.item.Date} - {data.item.Building} Room {data.item.Room} at {data.item.Time}</Text>
             </CardItem>
             <CardItem style={{backgroundColor:"transparent"}}>
               <Body>
                 <Text style = {styles.size}>
                   {data.item.Description}
                 </Text>
               </Body>
             </CardItem>
             <CardItem footer style={{backgroundColor:"transparent"}}>
               <Left>
                 <Button transparent textStyle={{color: '#87838B'}}>
                   <Icon name="bookmark" style ={{fontSize: 20}} />
                   <Text style = {styles.size} >   RSVP at {data.item.RSVPLink}</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
        </Content>
        <Image style = {{width: 190, height: 200}}
        source = {{uri: data.item.Picture}}
        />
      </View>
 render(){
  if(this.state.loading){
   return(
     <View>
       <ActivityIndicator size="small" color="#0c9"/>
     </View>
 )}
 return(
  <View style = {{backgroundColor: "#8b4513"}}>
  <FlatList
     data= {this.state.dataSource}
     renderItem= {item=> this.renderItem(item)}
     keyExtractor= {item=>item.id}
  />
 </View>
 )}
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff"
    },
   loader:{
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#fff"
    },
   list:{
     paddingVertical: 4,
     margin: 5,
     backgroundColor: "#fff"
    },
    size:{
      fontSize: 15,
      color: "#fff"
    }
 });