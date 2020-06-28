import React, { useEffect, useRef, useState } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import { useField } from '@unform/core';

import { colors } from '../styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  const [keyboardType, setKeyboardType] = useState('default');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });

    switch (fieldName) {
      case 'email':
        setKeyboardType('email-address');
        break;
      case 'phone':
        setKeyboardType('phone-pad');
        break;
      default:
        setKeyboardType('default');
        break;
    }
  }, [fieldName, registerField]);

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={styles.input}
        ref={inputRef}
        secureTextEntry={fieldName === 'password' ? true : false}
        passwordRules={fieldName === 'password' ? true : false}
        defaultValue={defaultValue}
        autoCapitalize='none'
        autoCompleteType={fieldName === 'password' ? 'password' : 'off'}
        autoCorrect={false}
        keyboardType={keyboardType}
        {...rest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.darkGray,
  },

  input: {
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderBottomWidth: 2,
    borderColor: colors.lightGray,
    fontSize: 15,
    flex: 1,
    color: colors.darkGray,
  },
});
