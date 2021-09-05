import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Button, List } from 'react-native-paper';
import IconList from '../components/IconList';
import ActionList from '../components/ActionList';
import styles from './../Style';
import Feather from 'react-native-vector-icons/Feather';


const MyAccount = ({ navigation }) => {

    return (
        <View style={[styles.container], {justifyContent:'flex-start'}} >
            <IconList title="Settings" icon="settings" handler={() => navigation.navigate('Settings')} />
            <IconList title="Logout" icon="log-out" handler={() => alert('Presesed')} />
        </View>
    );
};

export default MyAccount;