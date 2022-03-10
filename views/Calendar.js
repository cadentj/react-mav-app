import * as React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Text, View } from 'react-native';


export default function CalendarScreen() {
    const [value, onChange] = useState(new Date());

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Calendar onChange={onChange} showWeekNumbers value={value} />
        </View>
    );
}