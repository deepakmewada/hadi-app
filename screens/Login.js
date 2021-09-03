import React, {useState} from 'react';
import { TextInput,  Text, View, StyleSheet } from 'react-native';
import styles from './../Style';
import { Button } from 'react-native-paper';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleLogin = () => {

        const reqData = {
            email: email,
            password: password
        }
        console.log(reqData)
        navigation.navigate('Settings')
    }

    return (
    <View style={styles.container}>
      <TextInput
          style={styles.input}
          placeholder="EMAIL"
          onChangeText={(e) => setEmail(e)}
        />
      <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
        <Text style={styles.link} onPress={() => navigation.navigate('Forgot Password')}>Forgot Password</Text>
        <Button style={styles.button} contentStyle={{height:"100%"}} mode="contained" onPress={() => handleLogin()}>Log in</Button>
      </View>
    );
  };

  export default Login;