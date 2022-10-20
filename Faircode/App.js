import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import RootNavigator from './src/router';
import SampleList from './src/Home'
const App = () => {
  return (
    <Provider store={store}>
      <SampleList />
    </Provider>
  )
};
export default App;