/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import DateHead from './DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './AddTodo';
import Empty from './Empty';

function App(){
  const today = new Date();

  return(
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;