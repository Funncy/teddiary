/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Input from '../../utils/forms/input';

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: '새로 등록할게요~',
    hasErrors: false,
    form: {
      email: {
        value: '',
        type: 'textinput',
        rules: {},
        valid: false,
      },
      password: {
        value: '',
        type: 'textinput',
        rules: {},
        valid: false,
      },
      confirmPassword: {
        value: '',
        type: 'textinput',
        rules: {},
        valid: false,
      },
    },
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    this.setState({
      form: formCopy,
    });
    console.warn(this.state.form);
  };

  formHasErros = () => {
    return this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Hello</Text>
      </View>
    ) : null;
  };

  render() {
    return (
      <View>
        <Input
          value={this.state.form.email.value}
          type={this.state.form.email.type}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          placeholder="이메일 주소"
          placeholderTextColor="#ddd"
          onChangeText={(value) => this.updateInput('email', value)}
        />
        <Input
          value={this.state.form.password.value}
          type={this.state.form.password.type}
          secureTextEntry={true}
          keyboardType={'email-address'}
          placeholder="비밀번호"
          placeholderTextColor="#ddd"
          onChangeText={(value) => this.updateInput('password', value)}
        />
        {this.state.type !== 'Login' && (
          <Input
            value={this.state.form.password.value}
            type={this.state.form.password.type}
            secureTextEntry={true}
            keyboardType={'email-address'}
            placeholder="비밀번호 확인"
            placeholderTextColor="#ddd"
            onChangeText={(value) => this.updateInput('confirmPassword', value)}
          />
        )}
        {this.formHasErros()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ee3344',
  },
  errorLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default AuthForm;
