import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  function buttonHandler() {
    alert("You typed:" + text)
  }


  return (
    <View style={styles.container}>
      <TextInput onChangeText={(txt) => setText(txt)} />
      <Button title='Press Me' onPress={buttonHandler}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
