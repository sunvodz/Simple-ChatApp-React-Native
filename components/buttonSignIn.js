import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button } from "react-native-elements";

class buttonSignIn extends React.Component {
  render() {
    return (
      <View style={styles.center}>
        <Button
          onPress={() => this.props.clickSignin()}
          style={styles.button_signin}
          title="SignIn"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button_signin: {
    width: 100
  },
  center: {
    marginTop: 10,
    alignItems: "center",
    marginHorizontal: 50
  }
});

export default buttonSignIn;
