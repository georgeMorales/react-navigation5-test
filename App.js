import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNav from './app/navigation/RootNav'

export default function App() {
  return (
    <Fragment>
      <RootNav />
      <StatusBar style="auto" />
    </Fragment>
     
    
  );
}

