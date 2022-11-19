import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="type your goal..." />
        <Button title="Add Goal" />
      </View>

      <View style={styles.goalsContainer}>
        <Text> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 30,
    borderColor: "#cccccc"
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8
  },
  goalsContainer: {
    flex: 4
  }
});