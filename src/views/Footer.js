import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.text}>@Copyright 2023</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Footer;