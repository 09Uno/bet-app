import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, {  } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export function HamburgerMenuIcon() {

    return (
      <FontAwesomeIcon icon={faBars} size={30} color="#fff" />
    )
  }

 export function IconCalendar() {
    return (
      <FontAwesomeIcon icon={faCalendarAlt} size={30} color="#3f8872" />
    )
  }


  export function SettingsIcon() {
    return (
      <FontAwesomeIcon icon={faGear} size={30} color="#fff" />
    )
  }