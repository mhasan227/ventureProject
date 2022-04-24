/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation';
import {
  
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context";

import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from './src/component/StatusBar';

const App = () => {
  return (
      <>
      <StatusBar />
      <SafeAreaView style={styles.root}>
        <Navigation/>
      </SafeAreaView>
      </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
