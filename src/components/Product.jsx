import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


function Product({ item }) {
    return (
        <Container>
            <Circle />

            <Image src={item.img} />
            <Info>
                <Link className='link' to={`/product/${item.name}`}>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>

                    <Icon>
                        <SearchOutlined />
                    </Icon>
                </Link>

            </Info>
        </Container>
    )
}

export default Product


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-out;
    cursor: pointer;

    .link{
        text-decoration: none;
        display:flex;
    }
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 380px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    margin-top: 5%;
    
    /* as we only want to target Info component */
    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`


const Image = styled.img`
    height: 75%;
    z-index: 2;
`



const Icon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease-out;
    text-decoration: none;
    color: black;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

