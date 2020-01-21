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
import { Container, Header, Content, Card, CardItem, Thumbnail,Button, Icon, Left, Body } from 'native-base'





export default class Events extends React.Component {
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
 .catch(error=>console.log(error)) //to catch the errors if any
 }

 renderItem=(data)=>
         <Content>
           <Card style={{flex: 0}}>
             <CardItem>
               <Left>
                 <Thumbnail source={{uri: 'data:image/png;base64,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'}} />
                 <Body>
                   <Text style = {styles.size}>{data.item.Date} - {data.item.Building} at {data.item.Time}</Text>
                   <Text note style = {{fontSize: 15}}>Room {data.item.Room}</Text>
                 </Body>
               </Left>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={{uri: data.item.Picture}} style={{height: 200, width: 370, flex: 1}}/>
                 <Text style = {styles.size}>
                   {data.item.Description}
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent textStyle={{color: '#87838B'}}>
                   <Icon name="bookmark" style ={{fontSize: 20}} />
                   <Text style = {styles.size} >   RSVP at {data.item.RSVPLink}</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
         </Content>
 render(){
  if(this.state.loading){
   return(
     <View>
       <ActivityIndicator size="small" color="#0c9"/>
     </View>
 )}
 return(
  <View>
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
      fontSize: 20
    }
 });
