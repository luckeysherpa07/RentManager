import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import styled from 'styled-components/native';

const UserContianer = styled.View`
  display: flex
  flex: 1
  width: 100%
  flexDirection: column
  backgroundColor: grey
`;

const InfoContainer = styled.View`
  margin: 10px 10px 10px 10px
`

const InfoCard = styled.View`
  backgroundColor: white
  padding: 10px 10px 10px 10px
  flexDirection: row
`

const DetailContainer = styled.View`
  flexDirection: column
`

const ButtonContainer = styled.View`
  flex: 1
  backgroundColor: yellow
`

const UserImage = styled.Image`
  resizeMode: cover
  height: 100px
  width: 100px
`

const TitleText = styled.Text`
  fontSize: 20
`

const User = (props) => (
  <View style={styles.container}>
    <UserContianer>
      <InfoContainer>
        <InfoCard>
          <UserImage source={require('RentManager/src/assets/icon/profile-user.png')} />
          <DetailContainer>
            <TitleText>User</TitleText>
            <TitleText>Room No: 1</TitleText>
            <TitleText>Total Rent: Rs 2000</TitleText>
          </DetailContainer>
        </InfoCard>
      </InfoContainer>
      <ButtonContainer>
        <Text>User</Text>
      </ButtonContainer>
    </UserContianer>
  </View>
)
export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
