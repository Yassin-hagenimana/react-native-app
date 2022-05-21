import 'react-native-gesture-handler';
import React from "react"
import {SafeAreaView,StyleSheet} from "react-native";
import Navigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
          <Navigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffffff',
    justifyContent:"center",
    marginTop:80,
    flex:1,
    alignContent:"center"
  },
})