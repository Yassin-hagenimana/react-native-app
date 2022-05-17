import React from "react"
import {
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    Button,
    Alert,
    Platform,
    StatusBar,
    Dimensions
} from 'react-native';
import {useDeviceOrientation} from "@react-native-community/hooks";
import Welcome from "./app/Screens/Welcome";

export default function App() {
 const{landscape}=useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
        {/*<View style={{*/}
        {/*    backgroundColor: 'dodgerblue',*/}
        {/*    width:"50%",*/}
        {/*    height:landscape? "100%":"30%"*/}
        {/*}}>*/}

        {/*</View>*/}
      <Text>React Native</Text>
      <Text numberOfLines ={10}>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum </Text>

        <Image source={{
            width:300,
            height:300,
            uri:"https://picsum.photos/seed/picsum/200/300"
        }}/>

        <Text>Alerting button</Text>
        <Button title="Click me" onPress={()=>Alert.alert("Hello Yassin")}/>

           <Welcome/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent:"center",
    alignItems:'center',
      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0
  },
});
