import React from "react"
import {TouchableOpacity,SafeAreaView,View,StyleSheet,Text, TextInput, Button, TouchableOpacityBase } from "react-native";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
                 <Text style={styles.register}>Register Form</Text>
     <View style={styles.registerForm}>
         <TextInput placeholder="Names" style={styles.textInput} />
         <TextInput placeholder="Email" style={styles.textInput}/>
         <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput}/>
         <TextInput placeholder="Phone Number" style={styles.textInput} />
         <TextInput placeholder="Location" style={styles.textInput}/>
         <TextInput placeholder="Country" style={styles.textInput}/>
         </View>

<TouchableOpacity>
  <View style={styles.registerButton}>
    <Text style={styles.registerText}>Register</Text>
  </View>
</TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    justifyContent:"center",
    marginTop:100

  },
  register:{
      color:"gold",
      fontSize:40,
      textAlign:"center",
      
  },
  registerForm:{
      marginLeft:60,
      marginTop:40,

  },
  textInput:{
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
  registerButton:{
    width:380,
    marginLeft:60,
    marginTop:40,
    height:50,
    backgroundColor:"gold",
    borderColor:"gold",
    borderRadius:10

  },
  registerText:{
    textAlign:"center",
    padding:12,
    fontSize:18,
    color:"#ffffff",
  }

});