import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './Theme';

const Block = ({ title, children }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.block, { backgroundColor: theme.block, shadowColor: theme.shadow }]}>
      <Text style={[styles.blockTitle, { color: theme.primary }]}>{title}</Text>
      <View style={styles.blockContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  blockContent: {},
});

export default Block;