import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { NativeBaseProvider, Flex} from "native-base";
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Timer} from './components/Timer.js'


export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.SafeAreaViewContainer}>
        <ScrollView>
          <Flex flexDirection="column" alignSelf="center" marginTop="150px">
            <Timer/>
            <StatusBar style="auto" />
          </Flex>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewContainer:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
