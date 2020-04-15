import React from 'react';
import { StatusBar, YellowBox } from 'react-native'

import NavbarRoutes from './src/routes/navbar.routes';

YellowBox.ignoreWarnings([
  //? Possible errors to be ignored
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavbarRoutes />
    </>
  );
}
