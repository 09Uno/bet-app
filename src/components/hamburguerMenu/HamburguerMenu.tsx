import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu Menu</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 1</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 2</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 3</Text>
      </View>
    </View>
  );
}

export default function HamburgerMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawerContent}>
        <Drawer.Screen name=" " component={Text} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    header: {
      height: 100,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      justifyContent: 'center',
      paddingLeft: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    item: {
      height: 50,
      justifyContent: 'center',
      paddingLeft: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemText: {
      fontSize: 18,
    },
  });
  