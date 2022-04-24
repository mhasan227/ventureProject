import React from 'react' ;
import { DarkTheme,NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InformationScreen from '../screens/InformationScreen';

const Stack = createNativeStackNavigator();
class Navigation extends React.Component {
    
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator screenOptions={{headerShown: false}} >
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="InformationScreen" component={InformationScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            
       )
    }
}

export default Navigation