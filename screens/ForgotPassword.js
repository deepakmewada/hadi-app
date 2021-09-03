import React, {useState} from 'react';
import { TextInput, View } from 'react-native';
import styles from './../Style';
import { Button } from 'react-native-paper';

const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = useState(null)

    const handleResetPassword = () => {

        const reqData = {
            email: email
        }
        console.log(reqData)
    }

    return (
    <View style={styles.container}>
      <TextInput
          style={styles.input}
          placeholder="EMAIL"
          onChangeText={(e) => setEmail(e)}
        />
        
        <Button style={styles.button} contentStyle={{height:"100%"}} mode="contained" onPress={() => handleResetPassword()}>Reset Password</Button>
      <Button style={[styles.smallButton,{marginTop:18,alignSelf:'flex-end'}]} mode="contained" contentStyle={{backgroundColor:'#4db8b0'}} onPress={() => navigation.navigate('Login')}>Back to Login</Button>
      </View>
    );
  };

  export default ForgotPassword;