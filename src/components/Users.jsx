import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import Text from './Text';

const Users = () => {
  const [users, setUsers] = useState([]);

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
          <Text>{address}</Text>
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