import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}){
  // initize the state hook
  const [name, setName] = useState('');

  // Whenever the textinput value changes
  const txtHandler = enteredName => {
    setName(enteredName);
  }

  // when the OK button is pressed
  const btnHandler = () => {
    // do whatever you like with the name typed into the text field
    submitHandler(name);
    
    // dismiss the Keybaord
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="New todo..." value={name} onChangeText={txtHandler} />
      <Button title="Add todo" onPress={btnHandler} color='coral'/>
    </View> 
  );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:'#ddd'
    }
})