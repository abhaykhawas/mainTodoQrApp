import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
// import AsyncStorage from '@react-native-community/async-storage';

export default function MainTodo() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const pressHandler = (key) => {
    setTodos((prevtodos) => {
      return prevtodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (value) => {
    if(value.length > 0){
      setTodos((prevtodos) => {
        return [
          { text: value, key: Date.now(), checked: false },
          ...prevtodos
        ];
      })
    }

  //   try {
  //     await AsyncStorage.setItem('value', value)
  //     let vals = await AsyncStorage.getItem('value')
  //     console.log(vals)
  //     console.log(typeof vals)
  //   } catch (err) {
  //       console.log(err)
  //   }
  }
  
//   const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('value')
//     if(value !== null) {
//       setTodos((prevtodos) => {
//         return [
//           ...prevtodos
//         ];
//       })
//     }
//   } catch(e) {
//      console.log(Error)
//   }
// }
  // useEffect(() => {
    
  // })

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
          <ScrollView>
           {            
              todos.map((item) => (
                <TodoItem
                  text={item.text}
                  key={item.key}
                  item={item} pressHandler={pressHandler}
                  // delete={() => handleDeleteTodo(task.key)}
                />
              ))
            }
          </ScrollView>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});