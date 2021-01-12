import React from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './DropdownMenu.css';

function DropdownMenu() {

  return (
  <DropdownButton id="dropdown-basic-button" title="Settings">
  <Dropdown.Item href="#/action-1">Change Password</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Delete Profile</Dropdown.Item>
  </DropdownButton>
  );
}

export default DropdownMenu;
