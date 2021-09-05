import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Button } from 'react-native-paper'
import styles from './../Style';
import Feather from 'react-native-vector-icons/Feather';

const IconList = ({ title, icon, handler }) => {
    return (
        <Pressable onPress={() => handler()} >
            <View style={styles.iconListWrap}>
                <Feather name={icon} size={24}  color="#858585" /><Text style={{ fontSize: 16, color: '#858585', marginLeft:10 }}>  {title}</Text>
            </View>
        </Pressable>
    )
}

export default IconList
