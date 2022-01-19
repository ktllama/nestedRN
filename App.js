import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={[styles.container, { flexDirection: "column"}]}>
      <View style={[styles.container, { flexDirection: "row"}]}>
        <View style={{ flex: 1, backgroundColor: "#f3969a" }}/>
        <View style={{ flex: 1, backgroundColor: "#ffce67" }}/>
      </View>
      <View style={[styles.container, { flexDirection: "row"}]}>
        <View style={{ flex: 1, backgroundColor: "#ff7851" }}/>
        <View style={{ flex: 1, backgroundColor: "#78c2ad" }}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;

