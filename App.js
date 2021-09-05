import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ForgotPassword from './screens/ForgotPassword';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import Settings from './screens/Settings';
import styles from './Style';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
{/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */ }
export default function App() {

  const isLoggedIn = useState(true)

  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.header} screenOptions={{ headerStyle: { backgroundColor: '#009a8e' } }}>
        {!isLoggedIn ?
          (
            <Stack.Group>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Login',
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center',
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  title: 'Sign Up',
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center',
                }} />
            </Stack.Group>) : (
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              
          )
        }

        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{
          title: 'Forgot Password',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
