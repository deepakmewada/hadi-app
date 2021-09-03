import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, TextInput,  Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ForgotPassword from './screens/ForgotPassword';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();
{/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator style={styles.header} screenOptions={{ headerStyle: { backgroundColor: '#009a8e' } }}>
    <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ 
            title: 'Sign Up',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ 
            title: 'Login',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}
      />
      
      <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{ 
            title: 'Forgot Password',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}/>
      <Stack.Screen name="Settings" component={Settings} options={{ 
            title: 'Settings',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}



const Signup = ({ navigation, route }) => {
  return (<View>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
    <Text>subtitle</Text>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  header: {
    color: "#ffffff",
  },
});