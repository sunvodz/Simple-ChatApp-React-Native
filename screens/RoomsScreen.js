import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

class RoomsScreen extends React.Component {
  state = {
    message: [
        { text: "Hello", name: "SunvoDz" },
        { text: "Hi", name: "A" }
    ],
}
  render() {
    const name  = this.props.navigation.state.params.name
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>You name : {name}</Text>
        </View>
      </ScrollView>
    );
  }
}

RoomsScreen.navigationOptions = {
  title: "Rooms"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default RoomsScreen;
