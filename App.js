import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home'
import Favourites from './screens/Favourites'
import Order from './screens/Order'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Home navigation={navigation} />
    </View>
  )
}

const favouriteOptions = {
  title: 'My Favourite Books',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Favourites' component={Favourites} options={favouriteOptions} />
        <Stack.Screen name='Order' component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  }
})

export default App;

