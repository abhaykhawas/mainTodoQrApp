import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Qrscanner from './qrscanner'
import MainTodo from './mainTodoList'

function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to QrScanner"
      />
      <MainTodo/>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go To Todolist" style={{flex:1}} />
      <Qrscanner/>
      {/* <Text>Hello</Text> */}
    </View>
    
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}