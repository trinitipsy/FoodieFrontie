import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import Text from './Text';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [modalStateDelete, setModalStateDelete] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios('http://localhost:8080/users');
      setUsers(data);
    }
    fetchUsers();
  }, []);
  const handleOpen = () => {
    setModalStateDelete(true);
  };

  const handleClose = () => {
    setModalStateDelete(false);
  };
  const deleteUser = (id) => {
    console.log(id);
    const response = axios.delete(
      `http://localhost:8080/users/${id}`,

      { headers: { 'Content-Type': 'application/json' } }
    );
    setModalStateDelete(false);
  };

  return users.map(({ id, name, surname, address }) => (
    <StyledWrapper>
      <Grid>
        <Grid.Column width={16}>
          <Text fontSize={25}>{name} {surname}</Text>
          <Text>{address}</Text>

          <Link to={`/users/${id}/update-user`}>
            <button class="ui grey button">Update user</button>
          </Link>

          <Modal
            trigger={<button className="ui grey button" onClick={handleOpen}>Delete user</button>}
            open={modalStateDelete}
            onClose={handleClose}
            basic
            size='small'
          >
            <Modal.Content>
              <h3>Are you sure you want to delete user {name}?</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color='red' onClick={() => deleteUser(id)} inverted>
                <Icon name='checkmark' /> Yes, sure
                  </Button>
              <Button color='grey' onClick={handleClose} inverted>
                <Icon name='checkmark' /> No
                  </Button>
            </Modal.Actions>
          </Modal>
        </Grid.Column>
      </Grid>
    </StyledWrapper>
  ));
}

const StyledWrapper = styled.div`
  background-image: url("https://image.freepik.com/free-photo/dark-texture-chalk-board-black-board_28629-1027.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px;
  `;

export default Users;