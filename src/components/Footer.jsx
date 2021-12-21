import { Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>PATIL'S FRUIT CENTER.</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloremque sapiente tempora, repellendus optio obcaecati quae ipsa numquam? Ab soluta accusamus quo ex cupiditate earum tenetur alias. Perferendis iusto neque tenetur consequuntur?</Desc>

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

                <ContactItem><Room style={{marginRight:"10px"}}/>Navi Posri, Mohopada</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+91 9762228932</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>vishalpatil@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
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
    padding: 20px;
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
    ${mobile({ backgroundColor: "#fff8f8" })}


`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


