//This is Splash Screen 
import React, { useEffect } from 'react';
//Improting Essential Libraries 
import { Image, StyleSheet, Text, View } from 'react-native';


//React Navigation to User Details Screen
const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        const SplashTimeout = setTimeout(()=>{
            navigation.replace('UserInfoScreen');
        },2000);
        return () => clearTimeout(SplashTimeout);
    },
    [navigation]);
  //Creating Logo
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo}></Image>
      <Text style={styles.text}>LAYOUTindex Demo</Text>
    </View>
  );
};


//Stylying Logo
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#3a86a8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  logo: {
    width: 100, 
    height: 115, 
  },
  text:{
    fontSize:22,
    color:'white',
    marginTop:15,
  }
});


export default SplashScreen;
