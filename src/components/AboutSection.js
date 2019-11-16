import React from 'react'
import { Grid} from 'semantic-ui-react'
import styled from 'styled-components'
import Text from './Text';


const AboutSection = () => <StyledWrapper>
    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
          <Text fontSize={20}>"You no longer need restaurant phone numbers!<br /> We have connected restaurants to the Internet <br />and they now receive and respond to <br />orders on this site."</Text>
       
      </Grid.Column>
      <Grid.Column>
        <Text fontSize={20}>"All prices listed are the same<br /> (or lower) than in the restaurants themselves.<br /> This means that this service is<br /> free for you!"</Text>
      </Grid.Column>
      <Grid.Column>
        <Text fontSize={20}>"Shopping on this site is fast <br />and secure! No credit card number or other <br />financial information is required - payment <br />is made in cash upon delivery.rzaj"</Text>
      </Grid.Column>
    </Grid.Row>
</Grid>
</StyledWrapper>

const StyledWrapper = styled.div`
    padding: 20px;
    background-color: #0d0d0d;
    .grid {
    background-color: #0d0d0d;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    }
    h6 {
        padding: 10px;
        font-size: 25px;
    }
`;

export default AboutSection;