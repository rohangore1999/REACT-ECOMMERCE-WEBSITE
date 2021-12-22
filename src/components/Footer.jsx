import { Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>PATILS.</Logo>
                <Desc>Our goal is to deliver you the fresh and best quality foods at cheapest rate ever. We have our quick delivery service availabe.</Desc>

                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color="075e54">
                        <WhatsApp />
                    </SocialIcon>
                </SocialContainer>
            </Left>


            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>

            <Right>
                <Title>Contact</Title>

                <ContactItem><Room style={{marginRight:"10px"}}/>Near Pawan Bekari, New posari , Mohopada, PIN: 410222</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+91 9762228932</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>vishalj25patil@gmail.com</ContactItem>
            </Right>

        </Container>
    )
}

export default Footer

const Container = styled.div`
    margin-top: 5%;
    display: flex;
    ${mobile({ flexDirection: "column" })}

`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`



const Center = styled.div`
    flex:1;
    display: none;
    ${mobile({ display: "none" })}

`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex:1;
    padding: 20px;
    justify-content: flex-end;
    ${mobile({ backgroundColor: "#fff8f8" })}


`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

// const Payment = styled.img`
//     width: 50%;
// `;


