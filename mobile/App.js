import React from 'react';
import { StatusBar, YellowBox } from 'react-native'

import Routes from './src/routes/root.routes';

YellowBox.ignoreWarnings([
  'RootErrorBoundary'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Routes />
    </>
  );
}
