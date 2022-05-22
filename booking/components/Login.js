import React from 'react';
import { useFormik } from "formik";
import {TouchableOpacity,SafeAreaView, StyleSheet, View,Text,
     TextInput,
     ScrollView,
     ToastAndroid,
     Alert
} from 'react-native';
import axios from 'axios';
import * as SecureStore from "expo-secure-store";
function Login({navigation}) {
    const {handleSubmit,handleChange,values}=useFormik({
        initialValues:{
          email:"",
          password:""  
        },
        onSubmit:async(values)=>{
           if(!values.email || !values.password){
            Alert.alert("Error","Email and Password are required")
            navigation.navigate("Login")  
            return;
           }

           try {
               const response=await axios.post("http://192.168.8.103:8000/api/user/signin",{
                   email:values.email,
                   password:values.password
               })
               ToastAndroid.show("User Logged in successfully",ToastAndroid.SHORT)
               navigation.navigate("Home")

            const data = await response.json();
            if (data.token) {
               await SecureStore.setItemAsync("token", data.token);
      }
           } catch (err) {
            ToastAndroid.show("Invalid Email or Password",ToastAndroid.SHORT)
            navigation.navigate("Login")
            console.log(err.response.data)
        }
        }
    })

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.loginHeader}>Login Form</Text>
            <View  style={styles.form}>
          <TextInput placeholder='Email' style={styles.textInput}
          onChangeText={handleChange("email")}
          />
          <TextInput secureTextEntry={true} placeholder='Password' style={styles.textInput}
             onChangeText={handleChange("password")}
          />
            </View>
                <TouchableOpacity onPress={()=>{
                    handleSubmit()
                    navigation.navigate("Register")
                    
                    }}>
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
        color:"tomato"
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
        backgroundColor:"tomato",
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