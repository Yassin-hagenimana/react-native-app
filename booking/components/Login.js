import React from 'react';
import {TouchableOpacity,SafeAreaView, StyleSheet, View,Text, TextInput, TouchableOpacityBase, ScrollView } from 'react-native';

function Login() {
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.loginHeader}>Login Form</Text>
            <View  style={styles.form}>
          <TextInput placeholder='Username' style={styles.textInput}/>
          <TextInput placeholder='Email' style={styles.textInput}/>
          <TextInput secureTextEntry={true} placeholder='Password' style={styles.textInput}/>
            </View>

                <TouchableOpacity>
                    <View style={styles.LoginButton}>
                    <Text style={styles.loginText}>Login</Text>
                    </View>
                
                </TouchableOpacity>
        </SafeAreaView>
        </ScrollView>
    );
}

export default Login;

const styles=StyleSheet.create({
    container:{
        matginTop:100,
        backgroundColor:"#ffffff",
        margin:10
    },
    loginHeader:{
        textAlign:"center",
        fontSize:24,
        marginTop:100,
        color:"gold"
    },
    form:{
        marginLeft:50,
        marginTop:50
    },
    textInput:{
    flexDirection:"row",
    borderWidth:1.9,
    borderColor:"#e1e1e1",
    height:54,
    borderRadius:8,
    margin:10,
    padding:10,
    width:380,
    fontSize:16
    },
    LoginButton:{
        backgroundColor:"gold",
        width:380,
        marginLeft:60,
        marginTop:30,
        height:50,
        borderRadius:10
    },
    loginText:{
        textAlign:"center",
        padding:12,
        fontSize:18,
        color:"#ffffff",
    }
})