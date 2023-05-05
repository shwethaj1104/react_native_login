import React, { useState } from 'react'
import {KeyboardAvoidingView, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const LoginScreen=()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const navigation = useNavigation()
    
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        setModalContent(`Registered user ${auth.currentUser?.email}`)
        setModalVisible(true)
      })
      .catch(error =>{
        init = error.message.indexOf('(');
        fin = error.message.indexOf(')');
        let message =error.message.substr(init+1,fin-init-1)
        setModalContent(`Error :  ${message}`)
        setModalVisible(true)
      })
  }
  const handleLogin = () => {
    signInWithEmailAndPassword(auth,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.replace("Home")
        console.log('Logged in with:', user.email);
      })
      .catch(error => {
        init = error.message.indexOf('(');
        fin = error.message.indexOf(')');
        let message =error.message.substr(init+1,fin-init-1)
        setModalContent(`Error :  ${message}`)
        setModalVisible(true)
      })
  }



    return (
        //when ever key board's focus is not text, text we be hidden behind pointer--> to avoid that we are suign below componnet
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      > 
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={text=>setEmail(text)}
            style={styles.input}
            />
             <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={text=>setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalContent}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>
      </KeyboardAvoidingView>
    )
  }

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'35%'
    },
    inputContainer: {
        width: '80%'
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})
