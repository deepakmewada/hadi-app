import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Button, List } from 'react-native-paper';
import styles from './../Style';

const Settings = ({ navigation }) => {

    return (
        <View style={{backgroundColor:'#009a8e', height:'100%'}} >
            <View style={styles.listWrap}>
                <Text style={{fontSize:16,color:'#ffffff'}}>Email Id</Text>
                <Button style={styles.smallButton} mode="contained" contentStyle={{backgroundColor:'#4db8b0'}}  onPress={() => alert('Presesed')}>Edit</Button>
            </View>
            <View style={styles.listWrap}>
                <Text style={{fontSize:16,color:'#ffffff'}}>Reset Password</Text>
                <Button style={styles.smallButton} mode="contained" contentStyle={{backgroundColor:'#4db8b0'}} onPress={() => alert('Presesed')}>Edit</Button>
            </View>
            <View style={styles.listWrap}>
                <Text style={{fontSize:16,color:'#ffffff'}}>Set timer base length</Text>
                <Button style={styles.smallButton} mode="contained" contentStyle={{backgroundColor:'#4db8b0'}} onPress={() => alert('Presesed')}>Edit</Button>
            </View>

        </View>
    );
};

export default Settings;