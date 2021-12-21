import React from 'react'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'

import { mobile } from '../responsive'
import { useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom';

import { Link } from 'react-scroll'

import { useHistory } from "react-router-dom";


const Navbar = () => {
    const history = useHistory();
    const products = useSelector(state => state.cart.products)
    // console.log("products >>> ", products.length)

    // const quantity = useSelector(state => state.cart.quantity)
    const quantity = products.length

    console.log("history.location.pathname >>> ", history.location.pathname)
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Logo>
                        <NavLink to='/' style={{ textDecoration: "none", color: "white", cursor:"pointer" }} >PATILS. </NavLink>
                    </Logo>

                </Left>

                <Center>
                    {history.location.pathname !== '/cart' & !history.location.pathname.startsWith("/product/") ? (
                        <ul className="nav-items">
                            <li className="nav-item" >

                                <Link to='home' smooth={true} duration={1500} style={{ textDecoration: "none", color: "white", cursor:"pointer" }} >Home</Link>
                            </li>

                            <li className="nav-item" >
                                <Link to='categories' smooth={true} duration={1500} style={{ textDecoration: "none", color: "white", cursor:"pointer" }} >Categories</Link>
                            </li>

                            <li className="nav-item" >
                                <Link to='products' smooth={true} duration={1500} style={{ textDecoration: "none", color: "white", cursor:"pointer" }} >Product</Link>
                            </li>

                        </ul>
                    ) :

                        (<ul className="nav-items">
                            <li className="nav-item" >

                                <NavLink to='/'  style={{ textDecoration: "none", color: "white" }} >Home</NavLink>
                            </li>

                            <li className="nav-item" >
                                <NavLink to='/'  style={{ textDecoration: "none", color: "white" }} >Categories</NavLink>
                            </li>

                            <li className="nav-item" >
                                <NavLink to='/'  style={{ textDecoration: "none", color: "white" }} >Product</NavLink>
                            </li>

                        </ul>)}

                </Center>

                <Right>
                    <NavLink to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </NavLink>
                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height:60px;
    padding: .5rem 0;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: black;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    Link {
        text-decoration: none;
    }
    ul {
        display: flex;
        text-decoration: none;

        /* instead of writting 
        @media only screen and (max-width:380px){}; we are calling function from responsive.js
        */

        ${mobile({ marginLeft: "-11%", marginRight: "10%", fontSize: "0.8rem" })}
        
    }
    
    li 
    {
        display: block;
        padding-right: 1rem;
        transition: all .4s ease-in-out;
        

        a {
            position: relative;
            display: block;
            font-weight: 400;
            line-height: 24px;
            height: 24px;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: white;

        }

        a::after {
            content: '';
            position: absolute;
            display: block;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            border-bottom: 2px solid rgb(0, 0, 0);
        }

        a, a::after {
            transition: all .3s linear;
        }

        a:hover {
            color: rgb(0, 0, 0);
        }

        a:hover::after {
            left: 0;
            width: 100%;
        }
       
    }

    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    ${mobile({ padding: "10px 0px" })}

`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`


const Center = styled.div`
    flex:1;
    text-align: center;

    .nav-items{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ${mobile({ marginLeft: "5px" })}

`

const Logo = styled.h1`
    font-weight: bolder;
    letter-spacing: 3px;
    ${mobile({ fontSize: "19px", marginLeft: "5px" })}

`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex: 2, marginRight: "2%", justifyContent: "flex-end", marginLeft: "-12%;" })}

`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: all 0.5s ease-out;
    background-color: #ffffff;


    
    .MuiSvgIcon-root{
        text-decoration: none;
        color: black;
    }
    
    &:hover{
        background-color: #ffffff;
    }
    
`
