import React from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const keyExtractor = (item, index) => index.toString()

const renderItem = ({ item }) => {
  return (
  <TouchableOpacity onPressIn={item.goTo}>
    <ListItem bottomDivider >
      <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>Room No: {item.room}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  </TouchableOpacity>
  )
}

function Home() {
  const navigation = useNavigation();

  const list = [
    {
      room: '1',
      name: 'Amy Farha',
      subtitle: 'Vice President',
      goTo: () => navigation.navigate("User")
    },
    {
      room: '2',
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={renderItem}
    />
  )
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});