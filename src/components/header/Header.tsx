import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { IconButton } from 'react-native-paper';
import { HamburgerMenuIcon, SettingsIcon } from '../icons/Icons';


export default function Header() {

  const [isModalVisible, setModalVisible] = useState(false);
  const hamburgerMenuIcon = HamburgerMenuIcon; 
  const settingsItem = SettingsIcon;

  function openModal() {
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
  }

  function openSettingsModal() {
    console.log('not implemented yet');
  }
 


  return (
    <View style={styles.container_main}>
      <View style={styles.hamburger_menu}>
        <IconButton icon={hamburgerMenuIcon} onPress={openModal} />
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={styles.modal} animationIn="fadeInLeft" animationOut="fadeOutLeft" > 
        <View  style={[styles.menuItems, { width: '100%' }]}>

          <Text style={styles.menuItem}>Menu Item 1</Text>
          <Text style={styles.menuItem}>Menu Item 2</Text>
          <Text style={styles.menuItem}>Menu Item 3</Text>
        </View>
      </Modal>

      <Image style={styles.logo_img} source={require('../../imgs/beta-app-logo.png')} />

      <View style={styles.userConfig}>
        <IconButton icon={settingsItem} onPress={openSettingsModal} />
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container_main: {
    backgroundColor: '#126e51',
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    height:135,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
  },
  logo_img: {
    height: 90,
    width: 120,
    marginTop: 20,
    justifyContent: 'center',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  hamburger_menu: {
    height: 'auto',
    width: 'auto',
    marginTop: 40,
    marginLeft: 10,
  },
  userConfig: {
    height: 'auto',
    width: 'auto',
    marginTop: 40,
    marginRight: 10,
  },
  modal: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 0.65 * Dimensions.get('window').width,
    margin: 0,

  },
  closeButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItems: {
    backgroundColor: '#0f513c',
    flex: 1,
    zIndex: 0,
    alignItems: 'center',

  },
  menuItem: {
    fontSize: 20,
    paddingVertical: 10,

  },
});
