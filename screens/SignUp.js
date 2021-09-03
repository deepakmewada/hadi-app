import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import styles from './../Style';
import { Button, RadioButton } from 'react-native-paper';

const SignUp = ({ navigation }) => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confPassword, setConfPassword] = useState(null)
  const [age, setAge] = useState(null)
  const [gender, setGender] = React.useState('');

  const handleSignUp = () => {

    const reqData = {
      email: email,
      password: password,
      confPassword: confPassword,
      age: age,
      gender: gender
    }
    console.log(reqData)
    navigation.navigate('Login')
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
        keyboardType={"default"}
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="CONFIRM PASSWORD"
        keyboardType={"default"}
        secureTextEntry={true}
        onChangeText={(e) => setConfPassword(e)}
      />
      <View style={styles.row}>

        <TextInput
          style={styles.inputSm}
          placeholder="Age"
          keyboardType="number-pad"
          onChangeText={(e) => setAge(e)}
        />
        <View style={styles.radioWrapper}>
          <RadioButton
            value="male"
            label="Male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          /><Text style={styles.radioLabel}>Male</Text>
        </View>
        <View style={styles.radioWrapper}>
          <RadioButton
            value="female"
            label="Female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          /><Text style={styles.radioLabel}>Female</Text>
        </View>
        <View style={styles.radioWrapper}>
          <RadioButton
            value="others"
            label="Others"
            status={gender === 'others' ? 'checked' : 'unchecked'}
            onPress={() => setGender('others')}
          /><Text style={styles.radioLabel}>Others</Text>
        </View>
      </View>
      <Button style={styles.button} contentStyle={{height:"100%"}} mode="contained" onPress={() => handleSignUp()}>Sign Up</Button>
      <View style={styles.socialBtnWrap}>
        <Button icon="google" labelStyle={{color:'#DB4437', fontSize:25, fontWeight:"600"}} onPress={() => console.log('Pressed')}><Text style={{fontSize: 16}}>Google</Text></Button>
        <Button icon="facebook" labelStyle={{color:'#3b5998', fontSize:25, fontWeight:"600"}} onPress={() => console.log('Pressed')}><Text style={{fontSize: 16}}>Facebook</Text></Button>
      </View>
    </View>
  );
};

export default SignUp;