import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Main = () => (
  <Provider theme={theme}>
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  </Provider>
);

export default Main;
