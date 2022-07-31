/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './Counter';

const App = () => {
  return (
    <SafeAreaView style={styles.full}>
      <Counter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
export default App;
