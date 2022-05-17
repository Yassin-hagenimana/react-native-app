import React from 'react';
import {ImageBackground, StyleSheet, View,Image,Text} from "react-native";

function Welcome() {
    return (
       <ImageBackground
           style={styles.background}
       source={{uri:"https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"}}
       >

           <View>
               <Image style={styles.logo} source={require("../assets/download.png")}/>
               <Text>Sell what you don't need</Text>
           </View>

           <View style={styles.loginButton}></View>
           <View style={styles.registerButton}></View>

       </ImageBackground>
    );
}

const styles=StyleSheet.create({
background:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:'center'
},
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65"
    },
    registerButton:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4"
    },
    logo:{
        width:100,
        height:100,
        position:'absolute',
        top:10
    },
    logoContainer:{

    }
})

export default Welcome;