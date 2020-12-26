import React from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import styled from 'styled-components/native';

const InfoContainer = styled.View`
  margin: 15px 15px 15px 15px
`

const AmountSection = (props) => (
  <InfoContainer>
    <Text>Total Amount: Rs 100000</Text>
  </InfoContainer>
  )
export default AmountSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});