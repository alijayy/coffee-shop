import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PesananProvider} from "./utils/PesananContext";

import Home from "./components/Home.js";
import Detail from "./components/Detail.js";
import Pesanan from "./components/Pesanan.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PesananProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: { backgroundColor: '#F5DEB3' }, 
            headerStyle: { backgroundColor: '#E2C28E' }, 
            headerTitleStyle: { fontWeight: 'bold' },
          }}>
          <Stack.Screen
            name="Kopi Paste"
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Pesanan')} 
                  style={{ marginRight: 15 }}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png' }}
                    style={{ width: 24, height: 24 }}/>
                </TouchableOpacity>
              ),
            })}
          />

          <Stack.Screen
            name="Detail"
            component={Detail}
          />
          <Stack.Screen
            name="Pesanan"
            component={Pesanan}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PesananProvider>
  );
}

const styles = StyleSheet.create({
  
});
