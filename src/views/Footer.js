import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import FooterViewModel from '../viewModels/FooterViewModel';

const viewModel = new FooterViewModel();

const Footer = observer(() => (
  <View style={styles.footer}>
    <Text style={styles.text}>{viewModel.text}</Text>
  </View>
));

const styles = StyleSheet.create({
  footer: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    position: 'center',
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