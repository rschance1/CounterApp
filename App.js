import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import CounterView from './src/views/CounterView';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text style={{ textAlign: 'center', margin: 10 }}>Counter App</Text>
    <CounterView />
    <Text style={{ textAlign: 'center', margin: 10 }}>Footer</Text>
  </SafeAreaView>
);

export default App;