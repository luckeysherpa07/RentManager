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

const TimelineContainer = styled.View`
  flex: 1
  backgroundColor: yellow
  margin: 10px 10px 10px 10px
`

const TableContainer = styled.View`
  backgroundColor: blue
  padding: 10px 10px 10px 10px
`

const RowContainer = styled.View`
  backgroundColor: red
  flexDirection: row
`

const CellContainer = styled.View`
  flex: 2
  padding: 5px 5px 5px 5px
  backgroundColor: green
`

const AmountContainer = styled.View`
  flex: 1
  padding: 5px 5px 5px 5px
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
            <TitleText>Total Rent: Rs 10000</TitleText>
          </DetailContainer>
        </InfoCard>
      </InfoContainer>
      <TimelineContainer>
        <TableContainer>
          <RowContainer>
            <CellContainer>
              <Text>Regular Rent</Text>
            </CellContainer>
            <AmountContainer>
              <Text>Rs 2000</Text>
            </AmountContainer>
          </RowContainer>
          <RowContainer>
            <CellContainer>
              <Text>Electricity</Text>
            </CellContainer>
            <AmountContainer>
              <Text>Rs 500</Text>
            </AmountContainer>
          </RowContainer>
          <RowContainer>
            <CellContainer>
              <Text>Water</Text>
            </CellContainer>
            <AmountContainer>
              <Text>Rs 500</Text>
            </AmountContainer>
          </RowContainer>
          <RowContainer>
            <CellContainer>
              <Text>Internet</Text>
            </CellContainer>
            <AmountContainer>
              <Text>Rs 600</Text>
            </AmountContainer>
          </RowContainer>
        </TableContainer>
      </TimelineContainer>
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
