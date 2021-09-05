import React from 'react';
import styles from '../Style';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timer from './Timer';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyAccount from './MyAccount';
import Posts from './Posts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

    return (
        <NavigationContainer independent={true}>
      <Tab.Navigator
      
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Timer') {
            //   iconName = focused
            //     ? 'home'
            //     : 'home';
                iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            }else{
                iconName = 'user'
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#009a8e',
          tabBarInactiveTintColor: '#656565',
          tabBarActiveBackgroundColor: '#e5f5f4',
          tabBarInactiveBackgroundColor: '#e5f5f4',
          headerStyle: { backgroundColor: '#009a8e' },
          showLabel: false
        })}
        
        >
        <Tab.Screen name="Timer" component={Timer} options={{
                  title: 'Timer',
                  headerTintColor: '#fff',
                }}/>
        <Tab.Screen name="Posts" component={Posts} options={{
                  title: 'Posts',
                  headerTintColor: '#fff',
                }}/>
        <Tab.Screen name="My Account" component={MyAccount} options={{
                  title: 'My Account',
                  headerTintColor: '#fff',
                }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
    );
};

export default Home;