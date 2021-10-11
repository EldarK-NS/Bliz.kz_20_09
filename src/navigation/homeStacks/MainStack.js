import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/homeScreen/HomeScreen'
import CargoStack from './CargoStack';
import SpecEquipmentStack from './SpecEquipmentStack';
import { MyTheme } from '../../components/layout/theme';

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: MyTheme.blue,
                },
                headerTitleStyle: {
                    color: "white",
                },
                headerTitleAlign: "center",
            }}>
            <Stack.Screen name="Main" component={HomeScreen} />
            <Stack.Screen name="MainCargo" component={CargoStack} options={{ headerShown: false }} />
            <Stack.Screen name="MainSpecEquipment" component={SpecEquipmentStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}



