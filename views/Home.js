import * as React from 'react';
import { Text, View } from 'react-native';
import Schedule from '../components/Schedule';


export default function HomeScreen() {

  const Daily = Schedule();
  
  return (
    <View style={{ flex: 1 }}>
      {Daily}
    </View>
  );
}