/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = (props) => {
  let template = null;

  switch (props.type) {
    case 'textinput':
      template = (
        <View>
          <TextInput {...props} style={styles.input} />
        </View>
      );
      break;
    case 'textinputRevised':
      template = (
        <View>
          <TextInput {...props} style={styles.inputRevised} />
        </View>
      );
      break;
    default:
      return template;
  }

  return template;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
  inputRevised: {
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
});

export default Input;
