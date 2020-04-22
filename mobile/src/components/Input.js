import React, { useEffect, useRef, useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { useField } from '@unform/core';

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
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#444',
  },

  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    fontSize: 15,
    color: '#444',
  },
});
