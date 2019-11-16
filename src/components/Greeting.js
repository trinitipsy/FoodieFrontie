import React from 'react';
import styled from 'styled-components';
import { Image, Grid } from 'semantic-ui-react';
import Text from './Text';
const Header = () => (
    <StyledWrapper>
        <Grid>
            <Grid.Column width={4}>
                <Image className="logo" circular src='https://fbcd.co/product-lg/4d8390472d71fd01cb4c2bcbf90a43ec_resize.jpg' />
            </Grid.Column>
            <Grid.Column width={9}>
                <Text fontSize={120}>FoodSetGo</Text>
                <Text>Welcome to the unique online service for easy and fast ordering
             of food <br />from the best local restaurants. <br />Forget about waiting
             on your phone connection, outdated flyers, and wrong orders! <br />
                    Enjoy the taste of the best food ...
                </Text>
            </Grid.Column>
        </Grid>
    </StyledWrapper>
);

const StyledWrapper = styled.div`
    margin: 0;
    margin-bottom: 50px;
    background-color: #11111;
    padding: 50px;
    text-align: center;
    background-image: url("https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg");
    background-repeat: no-repeat;
    background-size: cover;
   
    .logo {
        height: 50%;
        width: 60%;
    }
`;
export default Header;