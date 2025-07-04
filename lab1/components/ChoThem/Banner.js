import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Banner = ({ imageUrl }) => (
  <Image source={{ uri: imageUrl }} style={styles.banner} />
);

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Banner;