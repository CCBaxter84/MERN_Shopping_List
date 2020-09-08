import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ItemsContextProvider } from "./components/ItemsContext";

ReactDOM.render(
  <ItemsContextProvider>
    <App />
  </ItemsContextProvider>,
  document.getElementById('root')
);
