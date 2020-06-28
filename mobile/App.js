import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes/root.routes';

import { AuthProvider } from './src/contexts/auth';

YellowBox.ignoreWarnings(['RootErrorBoundary']);

console.disableYellowBox = true;

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#ffffff' />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
