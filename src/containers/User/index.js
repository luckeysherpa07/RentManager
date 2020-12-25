import React from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

const User = (props) => (
  <View style={styles.container}>
    <Text>User</Text>
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