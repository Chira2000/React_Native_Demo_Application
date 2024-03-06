// Example: App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from './Src/Screens/SplashScreen.js';
import UserInfoScreen from './Src/Screens/UserInfoScreen.js';
import { UserProvider } from './Src/State/UserContext.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen}
        
        options={{headerShown:false,
       
        }
        } 
        />
        
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} 
        options={{title:'User Information',
        headerStyle:{
          backgroundColor:'#3a86a8',

        },
      headerTintColor:'white'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
};

export default App;
