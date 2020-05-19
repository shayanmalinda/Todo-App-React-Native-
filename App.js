import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import GeneralStatusBar from './components/StatusBar.js';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function () {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ])

  const pressHandler = (key) => {
    Alert.alert("Todo Delete", "Are you sure to delete this Todo? ", [
      { text: 'No', onPress: () => { } },
      {
        text: 'Yes', onPress: () => {
          setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
          })
        }
      },
    ])
  }

  const submitHandler = (text) => {

    if (text.length === 0) {
      Alert.alert("Warning", 'Please enter a Todo name...', [
        { text: 'Okay', onPress: () => console.log("alert closed") },
      ])
    }
    else {
      Keyboard.dismiss();
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>

      <View style={styles.container}>


        <GeneralStatusBar backgroundColor="chocolate"
          barStyle="light-content" />

        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});

