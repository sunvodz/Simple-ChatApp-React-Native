import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Input } from "react-native-elements";
import { MonoText } from "../components/StyledText";
import ButtonSignIn from "../components/buttonSignIn";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  onChange(name) {
    this.setState({ name });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>Chat App</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Enter your name</Text>

            <Input
              onChangeText={name => this.onChange(name)}
              value={this.state.name}
              placeholder="Enter your name"
            />
          </View>

    
          <ButtonSignIn name={this.state.name} clickSignin={ () => this.props.navigation.navigate("Rooms",{name:this.state.name})}/>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  getStartedContainer: {
    marginTop: 300,
    alignItems: "center",
    marginHorizontal: 100
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});

export default HomeScreen;
