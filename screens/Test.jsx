import {View, Text, StyleSheet} from 'react-native';

function Test() {
  return (
    <View style={styles.testContainer}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

export default Test;

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
