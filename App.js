import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import CounterView from './src/views/CounterView';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <CounterView />
  </SafeAreaView>
);

export default App;