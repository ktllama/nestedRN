import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const profileNavigator = createStackNavigator(
    //screens and styling

);

export const Route = () => {
            return (
              <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Browse Rooms" component={Browse} />
                <Stack.Screen name="Saved" component={Saved} />
                <Stack.Screen name="Chat" component={Chat} />
              </Stack.Navigator>
            );
    
};
