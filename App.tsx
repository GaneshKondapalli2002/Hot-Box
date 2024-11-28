import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './screens/Login';
import start from './screens/starting';
import Register from './screens/Registration';
import home from './screens/home';

const Stack = createNativeStackNavigator();

const App = () => {
  

  // Load fonts with useFonts hook
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  // Check if fonts are loaded
  if (!fontsLoaded) {
    return null; // Return null or a loading indicator until fonts are loaded
  }

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="start" component={start} />
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App;
