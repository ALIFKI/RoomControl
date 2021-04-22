/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/Routes';
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";

const App: () => React$Node = () => {
  return (
    <>
      <Route />
    </>
  );
};
export default App;
