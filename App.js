import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import CounterView from './src/views/CounterView';
import Header from './src/views/Header';
import Footer from './src/views/Footer';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header />
    <CounterView />
    <Footer />
  </SafeAreaView>
);

export default App;