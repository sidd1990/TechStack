import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducers from './reducers'

const App = () => {
  return(
    <Provider store={createStore(redcers)}>
    <View />
    </Provider>
  );
};

export default App;
