
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',
        {
          itemId: 86,
          message: "Hello from Home Screen"
        }
      )}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  const { itemId, message } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Message: {message}</Text>

      <Button
        title="Go to Details Again"
        onPress={() => navigation.push('Details',
          {
            itemId: Math.round(Math.random() * 100), 
            message: "Hello from Details Screen"
          }
        )}
      />

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings'
        )}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function SettingsScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Settings Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'maroon' },
          headerTintColor: 'lightblue',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options = {{ 
            title: "Home Sweet Home",
            headerStyle: { backgroundColor: 'maroon' },
            headerTintColor: 'lightblue',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
          />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;