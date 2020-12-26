import React from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import styled from 'styled-components/native';
import { ListItem, Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import AmountSection from 'RentManager/src/components/TenantList/AmountSection';

const TenantContainer = styled.ScrollView`
  backgroundColor: red
`

const Home = () => {
  const navigation = useNavigation();

  const list = [
    {
      room: '1',
      name: 'Pasang Sherpa',
      month: {
        name: 'January',
        roomRent: 5000,
        water: 500,
        internet: 500,
        
      }
    },
    {
      room: '2',
      name: 'Tsering Sherpa',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    },
  ]

  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPressIn={() => navigation.navigate("User")}>
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

  return (
    <TenantContainer>
      <AmountSection />
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </TenantContainer>
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