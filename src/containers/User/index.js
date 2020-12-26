import React from "react";
import styled from 'styled-components/native';
import TableAmount from 'RentManager/src/components/User/TableAmount';

const UserContianer = styled.ScrollView`
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
  padding: 10px 10px 10px 10px
`

const UserImage = styled.Image`
  resizeMode: cover
  height: 100px
  width: 100px
`

const TitleText = styled.Text`
  fontSize: 15
`

const User = (props) => (
  <UserContianer>
    <InfoContainer>
      <InfoCard>
        <UserImage source={require('RentManager/src/assets/images/profile-user.png')} />
        <DetailContainer>
          <TitleText>User</TitleText>
          <TitleText>Room No: 1</TitleText>
          <TitleText>Total Rent: Rs 10000</TitleText>
        </DetailContainer>
      </InfoCard>
    </InfoContainer>
    <TableAmount />
    <TableAmount />
    <TableAmount />
  </UserContianer>
)
export default User;
