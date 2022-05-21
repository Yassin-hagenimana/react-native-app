import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Register from './components/Register';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Signin',
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{
        title:"Signup"
      }}
    />
  </Stack.Navigator>
  )
}