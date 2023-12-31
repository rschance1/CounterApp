import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import HeaderViewModel from '../viewModels/HeaderViewModel';

const viewModel = new HeaderViewModel();

const Header = observer(() => (
  <View style={styles.header}>
    <Text style={styles.text}>{viewModel.text}</Text>
  </View>
));

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    color: '#ffffff',
    fontSize: 23,
    position: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;