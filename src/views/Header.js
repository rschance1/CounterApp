import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Counter App</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  title: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;