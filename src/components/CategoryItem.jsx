import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

function CategoryItem({ item }) {
    return (
        <Container >
            {/* <Link to={`/products/${item.cat}`}> */}
            <Link to="">
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;

`


const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh" })}

`


const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, rgb(114 114 114 / 70%) 0%,rgb(0 0 0 / 70%) 100%);
`


const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    letter-spacing: 3px;
`


const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 3px;
    transition: all 0.5s ease-out;

    &:hover{
        background-color: #000000;
        color: white;
    }
`



