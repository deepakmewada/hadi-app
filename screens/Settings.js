import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Button, List } from 'react-native-paper';
import ActionList from '../components/ActionList';
import styles from './../Style';

const Settings = ({ navigation }) => {

    return (
        <View style={[styles.container], {justifyContent:'flex-start'}} >
            <ActionList title="Change Email" handler={() => alert('Presesed')} />
            <ActionList title="Change Password" handler={() => alert('Presesed')} />
            <ActionList title="Change base timer" handler={() => alert('Presesed')} />
        </View>
    );
};

export default Settings;