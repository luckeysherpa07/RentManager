import React from "react";
import {
  Text,
  StyleSheet
} from "react-native";
import styled from 'styled-components/native';

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

const TableAmount = (props) => (
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
      <RowContainer>
        <CellContainer>
          <Text>Total This Rent</Text>
        </CellContainer>
        <AmountContainer>
          <Text>Rs 10000</Text>
        </AmountContainer>
      </RowContainer>
      <RowContainer>
        <CellContainer>
          <Text>Paid</Text>
        </CellContainer>
        <AmountContainer>
          <Text>Rs 5000</Text>
        </AmountContainer>
      </RowContainer>
      <RowContainer>
        <CellContainer>
          <Text>Due Amount</Text>
        </CellContainer>
        <AmountContainer>
          <Text>Rs 5000</Text>
        </AmountContainer>
      </RowContainer>
      <RowContainer>
        <CellContainer>
          <Text>Total</Text>
        </CellContainer>
        <AmountContainer>
          <Text>Rs 5000</Text>
        </AmountContainer>
      </RowContainer>
    </TableContainer>
  </TimelineContainer>
)

export default TableAmount;