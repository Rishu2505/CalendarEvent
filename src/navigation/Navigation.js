//Navigation.js
// React Native Bottom Navigation - Example using React Navigation V5 with Calender //
// https://github.com/Rishu2505/CalendarEvent.git //
import 'react-native-gesture-handler';
import * as React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Calendar, Events, Colors, Strings, CreateEvent } from '../../src';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CalenderStack() {
    return (
        <Stack.Navigator
            initialRouteName={Strings.NavigationKeys.Calendar}
            screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={Strings.NavigationKeys.Calendar} component={Calendar} />
        </Stack.Navigator>
    );
}

function EventsStack() {
    return (
        <Stack.Navigator
            initialRouteName={Strings.NavigationKeys.Events}
            screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={Strings.NavigationKeys.Events} component={Events} />
            <Stack.Screen name={Strings.NavigationKeys.CreateEvent} component={CreateEvent} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: Colors.activeTintColor,
                }}>
                <Tab.Screen
                    name="Calendar"
                    component={CalenderStack}
                    options={{
                        tabBarLabel: 'Calendar',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesignIcons name="calendar" color={color} size={size} />
                        ),
                    }} />
                <Tab.Screen
                    name="Events"
                    component={EventsStack}
                    options={{
                        tabBarLabel: 'Events',
                        tabBarIcon: ({ color, size }) => (
                            <EntypoIcons name="list" color={color} size={size} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;