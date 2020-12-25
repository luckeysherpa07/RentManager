import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'

const list = [
  {
    room: '1',
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    room: '2',
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem bottomDivider >
    <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>Room No: {item.room}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)

const Home = (props) => (
  <FlatList
    keyExtractor={this.keyExtractor}
    data={list}
    renderItem={this.renderItem}
  />
)
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});