import React from "react"
import {Alert,TouchableOpacity, SafeAreaView, View, StyleSheet,ToastAndroid, Text, TextInput } from "react-native";
import { useFormik } from "formik";
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Register({ navigation }) {

  const{handleSubmit,handleChange,values}=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      phoneNumber:"",
      location:"",
      country:""
    },

    onSubmit: async(values)=>{
      if(
        !values.name ||
        !values.country ||
        !values.email||
        !values.location||
        !values.phoneNumber||
        !values.password
      ){
       Alert.alert("Error","Fields are required")
       navigation.navigate("Register")
       return;
      }

      try{
        console.log(values)
        const result=await axios.post("http://192.168.8.103:8000/api/user/register",{
          name:values.name,
          country:values.country,
          email:values.email,
          location:values.location,
          phoneNumber:values.phoneNumber,
          password:values.password
        })
        ToastAndroid.show("User registered successfully",ToastAndroid.SHORT)
        navigation.navigate("Login")
       await AsyncStorage.setItem("userInfo",JSON.stringify(result.data))
      }catch(err){
       ToastAndroid.show("Something Went Wrong",ToastAndroid.SHORT)
       navigation.navigate("Register")
      }
    }
  })



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.register}>Register Form</Text>
      <View style={styles.registerForm}>
        <TextInput placeholder="Names" style={styles.textInput}
        value={values.name}
        onChangeText={handleChange("name")}
         />
        <TextInput placeholder="Email" style={styles.textInput}
        value={values.email}
        onChangeText={handleChange("email")} />
        <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput}
        value={values.password}
        onChangeText={handleChange("password")} />
        <TextInput placeholder="Phone Number" style={styles.textInput} 
        value={values.phoneNumber}
        onChangeText={handleChange("phoneNumber")}/>
        <TextInput placeholder="Location" style={styles.textInput}
        value={values.location}
        onChangeText={handleChange("location")} />
        <TextInput placeholder="Country" style={styles.textInput} 
        value={values.country}
        onChangeText={handleChange("country")}/>
      </View>

      <TouchableOpacity onPress={() =>{
         handleSubmit()
         navigation.navigate("Home")
         }}>
        <View style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "center",
    marginTop: 100

  },
  register: {
    color: "tomato",
    fontSize: 40,
    textAlign: "center",

  },
  registerForm: {
    marginLeft: 60,
    marginTop: 40,

  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    width: 380,
    height: 50,
    borderRadius: 6,
    borderColor: "#e1e1e1",
    borderWidth: 1.9,
  },
  registerButton: {
    width: 380,
    marginLeft: 60,
    marginTop: 40,
    height: 50,
    backgroundColor: "tomato",
    borderColor: "tomato",
    borderRadius: 10

  },
  registerText: {
    textAlign: "center",
    padding: 12,
    fontSize: 18,
    color: "#ffffff",
  }

});