import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Button, Icon, Modal } from 'semantic-ui-react';
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
 

  return users.map(({ id, name, surname, address }) => (
    <StyledWrapper>
      <Grid>
        <Grid.Column width={16}>
          <Text fontSize={25}>{name} {surname}</Text>
          <Text><i>{address}</i></Text>
        </Grid.Column>
      </Grid>
    </StyledWrapper>
  ));
}

const StyledWrapper = styled.div`
  background-image: url("sparkle.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px;
  `;

export default Users;