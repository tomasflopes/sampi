import React, { useEffect, useRef } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import { useField } from '@unform/core';

import { colors } from '../styles'

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

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
      }
    })
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
        {...rest}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.darkGray,
  },

  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderBottomWidth: 2,
    borderColor: colors.lightGray,
    fontSize: 15,
    flex: 1,
    color: colors.darkGray,
  },
});
