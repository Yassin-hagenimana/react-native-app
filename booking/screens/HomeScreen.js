import React from 'react';
import { SafeAreaView, StyleSheet,View, Text } from 'react-native';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'
function HomeScreen({navigation}) {
    return (
       <SafeAreaView >
           <View>
        <NavBar style={styles.navBar}>
        <NavTitle>
         <Text style={styles.title}>Yassin</Text>
        </NavTitle>
        <NavGroup  >
          <NavButton onPress={()=>navigation.navigate("Register")}>
            <NavButtonText >
              <Text >Register</Text>
            </NavButtonText>
          </NavButton>
          <NavButton onPress={()=>navigation.navigate("Login")}>
            <NavButtonText>
              <Text>Login</Text>
            </NavButtonText>
          </NavButton>
        </NavGroup>
      </NavBar>
      </View>
         <Text style={styles.header}>Welcome to Application</Text>   
       </SafeAreaView>
    );
}

export default HomeScreen;

const styles=StyleSheet.create({
    header:{
        textAlign:"center",
        fontSize:35,
        color:"tomato",
        marginTop:100
    },
      navBarContainer: {
      
      },
      navBar: {
        borderTopWidth: 0,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
      },
  
      title:{
          color:"#000",
      }
})