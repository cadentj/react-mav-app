import * as React from 'react';
import { Text, View } from 'react-native';
import Schedule from '../components/Schedule';


export default function HomeScreen() {

  return (
    <View style={{ flex: 1 }}>
      <Schedule/>
    </View>
  );
}