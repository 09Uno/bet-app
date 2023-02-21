import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { RiUserSettingsFill } from 'react-icons/ri';
import { Turn as Hamburger } from 'hamburger-react';
import Modal from 'react-native-modal';



export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsModalVisible(true);
    setIsMenuOpen(true);

  };

  const closeMenu = () => {
    setIsModalVisible(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setToggled(isMenuOpen);
  }, [isMenuOpen]);

  const [toggled, setToggled] = useState(false);

  return (
    <View style={styles.container_main}>
      <View style={styles.hamburger_menu}>
        <Hamburger color="#fff" toggled={toggled} toggle={setToggled} onToggle={toggled => {
          if (toggled) {
            // open a menu
            openMenu();
            toggled = false;
          } else {
            // close a menu
            closeMenu();
            toggled = false;
          }
        }} />
      </View>

      <Image style={styles.logo_img} source={require('../../imgs/beta-app-logo.png')} />

      <View style={styles.userConfig}>
        <RiUserSettingsFill size={30} color="#fff" />
      </View>

      <Modal isVisible={isModalVisible} onBackdropPress={closeMenu} style={styles.modal} animationIn="fadeInRight" animationOut="fadeOutRight">
        <View style={[styles.menuItems, { width: '100%' }]}>
          <Text style={styles.menuItem}>Menu Item 1</Text>
          <Text style={styles.menuItem}>Menu Item 2</Text>
          <Text style={styles.menuItem}>Menu Item 3</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container_main: {
    backgroundColor: '#126e51',
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    height: 'auto',
    width: '100%',
  },
  logo_img: {
    height: 60,
    width: 80,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  hamburger_menu: {
    zIndex: 3,
    height: 'auto',
    width: 'auto',
    marginTop: 20,
    marginLeft: 10,
    position: 'absolute',
  },
  userConfig: {
    height: 45,
    width: 45,
    marginTop: 25,
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
