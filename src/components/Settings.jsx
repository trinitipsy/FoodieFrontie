import React, { Fragment, useState } from 'react';
import { Modal, Icon, Button, Grid } from 'semantic-ui-react';
import { Link } from '@reach/router';
import axios from 'axios';
import styled from 'styled-components';

const Settings = () => {
  const [modalStateDelete, setModalStateDelete] = useState('');
  const handleOpen = () => {
    setModalStateDelete(true);
  };

  const handleClose = () => {
    setModalStateDelete(false);
  };
  const deleteUser = () => {
    const response = axios.delete(
      'http://localhost:8080/users',

      { headers: { 'Content-Type': 'application/json' } }
    );
    window.location.href='/';
  };
  return (
    <StyledWrapper centered columns={2}>
      <Grid.Row>
      <Link to={'/users/update-user'}>
        <Button inverted color='grey' size='massive'>Update account</Button>
      </Link>
      </Grid.Row>
      <Grid.Row>
      <Modal
        trigger={<Button inverted color='grey' size='massive' onClick={handleOpen} >Delete account</Button>}
        open={modalStateDelete}
        onClose={handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <h3>Are you sure you want to delete your account?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => deleteUser()} inverted>
            <Icon name='checkmark' /> Yes, sure
                  </Button>
          <Button color='grey' onClick={handleClose} inverted>
            <Icon name='checkmark' /> No
                  </Button>
        </Modal.Actions>
      </Modal>
      </Grid.Row>
    </StyledWrapper>
  )
  {/* <Link to={'/users/delete-user'}>
      <Button inverted color='grey' size='massive'>Delete account</Button>
    </Link>
    <Link to={`/users/${id}/update-user`}>
      <Button inverted color='grey' size='massive'>Log out</Button>
    </Link> */}
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