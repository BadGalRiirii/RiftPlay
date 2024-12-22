import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RechargeVP from './src/screens/RechargeVP';
import RechargeDiamonds from './src/screens/RechargeDiamonds';
import RechargeCOD from './src/screens/RechargeCOD';
import RechargeWildRift from './src/screens/RechargeWildRift';
import PaymentScreen from './src/screens/PaymentScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6A0DAD', // Royal Purple gradient style
            shadowColor: 'transparent', // Optional: Remove shadow under header
            elevation: 0, // Optional: Remove shadow for Android
          },
          headerTintColor: '#F1A7D1', // Sugar Pink color for text and icons
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen name="RiftPlay" component={HomeScreen} />
        <Stack.Screen name="RechargeVP" component={RechargeVP} />
        <Stack.Screen name="RechargeDiamonds" component={RechargeDiamonds} />
        <Stack.Screen name="RechargeCOD" component={RechargeCOD} />
        <Stack.Screen name="RechargeWildRift" component={RechargeWildRift} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
