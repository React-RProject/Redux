import React from 'react';
import { Provider } from 'react-redux';
import List from './components/List';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Item List</h1>
        <List />
      </div>
    </Provider>
  );
};

export default App;
