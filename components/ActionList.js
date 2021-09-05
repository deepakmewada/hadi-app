import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import styles from './../Style';

const ActionList = ({title, handler}) => {
    return (
        <View style={styles.listWrap}>
            <Text style={{fontSize:16, color:'#858585'}}>{title}</Text>
            <Button style={styles.smallButton} labelStyle={{color:'#009a8e'}} mode="contained"  onPress={() => handler()}>Edits</Button>
        </View>
    )
}

export default ActionList
