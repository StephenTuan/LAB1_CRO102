import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from './Theme';

const ThemedTextInput = ({ placeholder }) => {
  const { theme } = useTheme();
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.placeholder}
      style={[styles.textInput, { borderColor: theme.border, color: theme.text, backgroundColor: theme.background }]}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
  },
});

export default ThemedTextInput;