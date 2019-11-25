import React, { Fragment, useState } from 'react';
import { Modal, Icon, Button, Grid } from 'semantic-ui-react';
import { Link } from '@reach/router';
import axios from '../API/AxiosInstance';
import styled from 'styled-components';
import Text from './Text';
import AuthService from '../service/AuthService';

const Settings = () => {
  const [modalStateDelete, setModalStateDelete] = useState('');
  const [modalStateLogout, setModalStateLogout] = useState('');

  const handleOpen = () => {
    setModalStateDelete(true);
  };
  const handleOpenLogout = () => {
    setModalStateLogout(true);
  };

  const handleClose = () => {
    setModalStateDelete(false);
  };

  const handleCloseLogout = () => {
    setModalStateLogout(false);
  };

  const deleteUser = () => {
    const response = axios.delete(
      'users',

      { headers: { 'Content-Type': 'application/json' } }
    );
    window.location.href = '/';
  };

  const logOut = () => {
    AuthService.logOut();
    window.location.href = '/';
  };

  return (
    <StyledWrapper centered columns={2}>
      <Button.Group vertical>
     
        <Link to={'/users/update-user'}>
          <Button inverted color='black' size='massive'>Update account</Button>
        </Link>
        <Modal
          trigger={<Button inverted color='black' size='massive' onClick={handleOpen} >Delete account</Button>}
          open={modalStateDelete}
          onClose={handleClose}
          basic
          size='small'
        >
          <Modal.Content>
            <Text>Are you sure you want to delete your account?</Text>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={() => deleteUser()} inverted>
              <Icon name='checkmark' /> Yes, sure
                  </Button>
            <Button color='black' onClick={handleClose} inverted>
              <Icon name='checkmark' /> No
                  </Button>
          </Modal.Actions>
        </Modal>
        <Modal
          trigger={<Button inverted color='black' size='massive' onClick={handleOpenLogout} >Log out</Button>}
          open={modalStateLogout}
          onClose={handleCloseLogout}
          basic
          size='small'
        >
          <Modal.Content>
            <Text>Are you sure you want to log out?</Text>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={() => logOut()} inverted>
              <Icon name='checkmark' /> Yes, sure
                  </Button>
            <Button color='black' onClick={handleCloseLogout} inverted>
              <Icon name='checkmark' /> No
                  </Button>
          </Modal.Actions>
        </Modal>
      </Button.Group>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background-color: #11111;
  padding: 50px;
  text-align: center;
  background-image: url('greeting.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Settings;