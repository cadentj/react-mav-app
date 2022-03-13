import * as React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Bread from '@mui/icons-material/BakeryDining';
import AgendaCalendar from '../components/AgendaCalendar';


export default function CalendarScreen() {
    const [value, onChange] = useState(new Date());

    return (
        <View style={{ flex: 1, marginBottom: 100}}>
            <AgendaCalendar/>
        </View>
    );
}