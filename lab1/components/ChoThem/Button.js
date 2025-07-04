import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from './Theme';

const Button = ({ title, onPress }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: theme.block }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;