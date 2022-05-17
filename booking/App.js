import React from "react"
import {SafeAreaView,StyleSheet} from "react-native";
//import Register from "./components/Register";
import Login from "./components/Login";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
   {/* <Register/> */}
   <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffffff',
    justifyContent:"center",

  },
})