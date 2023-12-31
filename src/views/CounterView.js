import React from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react';
import CounterViewModel from '../viewModels/CounterViewModel';

const viewModel = new CounterViewModel();

const CounterView = observer(() => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Count: {viewModel.count}</Text>
    <Button title="Increment" onPress={() => viewModel.increment()} />
    <Button title="Decrement" onPress={() => viewModel.decrement()} />
  </View>
));

export default CounterView;
