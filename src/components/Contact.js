import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { Button, Form, Message } from 'semantic-ui-react';

const Footer = () => (
    <StyledWrapper>
        <Grid className="grid_parent">

            <Grid.Column className="contact" width={10}>
                <h2><b>Contact us</b></h2>
                <h6>Phone: <i>032/433-324</i></h6>
                <h6>Email: <i>FoodSetGo@gmail.com</i></h6>
                <h6>Address: <i>Stepe Stepanovica 16</i></h6>
                <h6>Follow us on   <button className="ui facebook grey button">
                    <i className="facebook icon"></i>
                    Facebook</button></h6>
               
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
                <h2>Or send us direct message</h2>
                <Form success>
                    <Form.Input placeholder='Email: joe@schmoe.com' />
                    <Message
                        visible
                        content="Your message here..."
                    />
                    <button className="ui grey button">Submit</button>
                </Form>
            </Grid.Column>
        </Grid>
    </StyledWrapper>
)
const StyledWrapper = styled.div`

padding: 60px;
height: 70%;
margin: 100px;
.grid_parent {
   
}
h6, h2 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}


`;
export default Footer;