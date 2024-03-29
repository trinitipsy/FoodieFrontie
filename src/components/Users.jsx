import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../API/AxiosInstance';
import { Grid } from 'semantic-ui-react';
import Text from './Text';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios('users');
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