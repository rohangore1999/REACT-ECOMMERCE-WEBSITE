import { Close, FileCopyOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { removeFromCart } from '../redux/cartRedux'
import { mobile } from '../responsive'
// import { useHistory } from 'react-router-dom';
import { Drawer, Snackbar } from '@material-ui/core';
import qrcode from '../img/qrcode.jpg';
import phonepe from '../img/phonepe-logo.png';
import amazon from '../img/amazon-pay.png';

import './Cart.css'

import { Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';



function Cart() {
    // to fetch data from Redux
    const cart = useSelector(state => state.cart)

    let total = 0

    // remove from cart function which will take product which clicked
    const dispatch = useDispatch()

    const handleRevomeFromCart = (product) => {
        dispatch(removeFromCart(product))
    }


    // const history = useHistory();
    // const handleContinueShoppingCLick = () => {
    //     history.push("/");
    // }

    // check toggle state [boolean]
    const [state, setState] = useState(false)

    // Functions
    const toggleDrawer = () => {
        setState(true)
    }

    // copyText to clipboard
    const copyText = (text) => {
        console.log(text)
        navigator.clipboard.writeText(text);
    }

    // TOOLTIP function
    const [showTooltip, setShowTooltip] = useState(false);


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    {/* <TopButton onClick={handleContinueShoppingCLick}>BACK</TopButton> */}
                    <TopTexts>
                        <TopText>Shopping Bag({cart.products.length})</TopText>
                        <TopText>Your Wishlist(0)</TopText>

                    </TopTexts>
                    <TopButton type="filled" onClick={(event) => [toggleDrawer(), handleClick()]}>CHECKOUT NOW</TopButton>
                </Top>


                <Bottom>
                    <Info>

                        {cart.products.map((product) => (

                            <Product key={product.id}>
                                <ProductDetail>
                                    <Image src={product.img} />

                                    <Details>
                                        <ProductName><b>Product: </b>{product.name}</ProductName>
                                        <ProductId><b>QTY: </b>{product.qty}</ProductId>
                                        <ProductSize><b>Price: </b>₹ {product.price}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        {/* <Remove /> */}
                                        <ProductPrice>{Product.price} Rs</ProductPrice>
                                        <ProductAmount>{product.price * product.qty} </ProductAmount>

                                        {/* <Add /> */}

                                    </ProductAmountContainer>
                                    <TopButton onClick={() => handleRevomeFromCart(product)}>Remove</TopButton>


                                </PriceDetail>

                            </Product>

                        )
                        )}

                        {/* <Hr /> */}

                    </Info>

                    {/* CALCULATING TOTAL PRICE */}
                    {/* div for hidding the number */}
                    <div className="hidetotal" style={{ display: "none" }}>
                        {
                            // to calculate total price
                            cart.products.map((item) => (
                                total += (item.price * item.qty)
                            ))


                        }
                    </div>



                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs. {total}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>0 Rs</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>0 Rs</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>Rs. {total}</SummaryItemPrice>
                        </SummaryItem>

                        <Button onClick={(event) => [toggleDrawer(), handleClick()]}>CHECKOUT NOW</Button>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer />

            {/* Drawer */}
            <Drawer className="drawer" anchor={'bottom'}
                open={state}
                onClose={() => { setState(false) }}>

                <div className="container">
                    <div className="text-center">
                        <br />

                        <h1 style={{ letterSpacing: "3px" }} className="heading">PATILS.</h1>
                        <hr className='hr-line' />
                        <img src={qrcode} height="200" className="rounded" alt="..." />
                        <p >vishalj25patil@oksbi

                            <Tooltip title="Copy Text" open={showTooltip} placement="top" onOpen={() => setShowTooltip(true)} onClose={() => setShowTooltip(false)}
                                arrow>
                                <IconButton onClick={()=>[setShowTooltip(!showTooltip), copyText('vishalj25patil@oksbi')]} >
                                    <FileCopyOutlined />
                                </IconButton>
                            </Tooltip>
                        </p>
                    </div>


                    <div className="d-flex justify-content-center">
                        {/* <!-- Google Pay logo --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                            focusable="false" width="5.51em" height="1.5em"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 93">
                            <path
                                d="M482.684 37.106L493.63 63.54h.129l10.687-26.435H512l-23.042 53.062h-7.168l8.577-18.562l-15.17-34.5h7.488zM457.85 35.89c5.12 0 9.151 1.344 12.096 4.096c2.945 2.753 4.417 6.465 4.417 11.266v22.722h-6.594v-5.12h-.318c-2.88 4.224-6.658 6.336-11.396 6.336c-4.031 0-7.424-1.216-10.175-3.584c-2.754-2.432-4.098-5.44-4.098-9.025c0-3.777 1.409-6.849 4.354-9.09c2.88-2.24 6.72-3.392 11.52-3.392c4.096 0 7.489.769 10.178 2.24v-1.6c0-2.432-.96-4.416-2.88-6.144c-1.92-1.665-4.161-2.497-6.721-2.497c-3.84 0-6.912 1.6-9.154 4.865l-6.08-3.84c3.328-4.801 8.322-7.233 14.85-7.233zM422.9 20.08c4.673 0 8.642 1.536 11.905 4.673c3.328 3.136 4.929 6.912 4.929 11.329c0 4.544-1.665 8.385-4.929 11.393c-3.201 3.073-7.168 4.609-11.905 4.609h-11.393V73.91h-6.914V20.08H422.9zm35.845 35.46c-2.816 0-5.12.704-7.042 2.048c-1.856 1.408-2.816 3.073-2.816 5.057c0 1.792.768 3.328 2.304 4.48c1.536 1.217 3.328 1.793 5.376 1.793c2.881 0 5.506-1.088 7.81-3.2c2.304-2.177 3.392-4.673 3.392-7.618c-2.175-1.728-5.184-2.56-9.024-2.56zM423.09 26.8h-11.584v18.755h11.584c2.754 0 5.058-.896 6.85-2.752c1.857-1.856 2.752-4.033 2.752-6.593c0-2.496-.895-4.673-2.752-6.529c-1.792-1.92-4.096-2.88-6.85-2.88z"
                                fill="#5F6368" />
                            <path
                                d="M306.916 35.954c4.672 0 8.386 2.048 10.307 4.352h.318v-3.2h8.194V72.31c0 14.466-8.512 20.419-18.625 20.419c-9.475 0-15.171-6.401-17.348-11.586l7.49-3.136c1.343 3.2 4.608 6.977 9.858 6.977c6.464 0 10.431-4.033 10.431-11.522v-2.816h-.318c-1.921 2.368-5.635 4.48-10.307 4.48c-9.793 0-18.753-8.513-18.753-19.522c0-11.073 8.96-19.65 18.753-19.65zm56.329.064c10.178 0 15.106 8.065 16.77 12.481l.896 2.24l-26.179 10.818c1.984 3.905 5.12 5.953 9.472 5.953c4.355-.128 7.427-2.24 9.666-5.505l6.656 4.48c-2.175 3.201-7.36 8.706-16.322 8.706c-11.137 0-19.393-8.577-19.393-19.587c0-11.65 8.385-19.586 18.434-19.586zM171.609 14.32c9.28 0 15.873 3.648 20.802 8.385l-5.889 5.888c-3.584-3.328-8.385-5.952-14.978-5.952c-12.225 0-21.826 9.857-21.826 22.083c0 12.225 9.537 22.082 21.826 22.082c7.937 0 12.482-3.2 15.362-6.08c2.369-2.369 3.905-5.761 4.545-10.434h-20.098v-8.32h28.163c.32 1.471.448 3.264.448 5.184c0 6.209-1.728 13.953-7.17 19.458c-5.376 5.569-12.16 8.513-21.185 8.513c-16.77 0-30.852-13.634-30.852-30.403c0-16.77 14.081-30.404 30.852-30.404zm50.888 21.634c10.818 0 19.65 8.257 19.65 19.586c0 11.266-8.832 19.586-19.65 19.586c-10.817 0-19.65-8.32-19.65-19.586c0-11.33 8.833-19.586 19.65-19.586zm42.755 0c10.817 0 19.65 8.257 19.65 19.586c0 11.266-8.833 19.586-19.65 19.586c-10.818 0-19.652-8.32-19.652-19.586c0-11.33 8.834-19.586 19.652-19.586zm75.271-19.586v57.543h-8.577V16.368h8.577zm-117.962 27.33c-5.888 0-11.01 4.801-11.01 11.842c0 6.977 5.122 11.842 11.01 11.842c5.889 0 11.01-4.865 11.01-11.842c0-7.04-5.121-11.841-11.01-11.841zm42.691 0c-5.89 0-11.01 4.801-11.01 11.842c0 6.977 5.12 11.842 11.01 11.842c5.888 0 11.008-4.865 11.008-11.842c0-7.04-5.12-11.841-11.008-11.841zm42.496-.063c-5.952 0-10.88 5.056-10.88 11.97c0 6.848 4.992 11.777 10.88 11.777c5.826 0 10.434-4.929 10.434-11.778c0-6.913-4.608-11.97-10.434-11.97zm55.753-.128c-4.352 0-10.434 3.904-10.178 11.457l17.475-7.297c-.96-2.432-3.84-4.16-7.297-4.16z"
                                fill="#5F6368" />
                            <path
                                d="M95.363 17.296c-10.357-5.978-23.6-2.426-29.584 7.93L50.692 51.361c-4.365 7.546 1.255 10.183 7.521 13.94l14.517 8.38c4.916 2.835 11.195 1.151 14.03-3.758l15.51-26.858c5.21-9.025 2.118-20.559-6.907-25.77z"
                                fill="#EA4335" />
                            <path
                                d="M78.292 28.113l-14.516-8.379c-8.014-4.448-12.552-4.743-15.842.487L26.524 57.3c-5.98 10.35-2.42 23.586 7.93 29.552c9.025 5.21 20.559 2.118 25.77-6.907l21.82-37.796c2.848-4.916 1.164-11.202-3.752-14.037z"
                                fill="#FBBC04" />
                            <path
                                d="M81.086 9.052L70.89 3.162C59.612-3.346 45.191.514 38.682 11.793L19.268 45.413c-2.868 4.96-1.165 11.31 3.796 14.172l11.419 6.592c5.639 3.259 12.846 1.325 16.104-4.314l22.179-38.41c4.595-7.957 14.766-10.684 22.722-6.088L81.086 9.052z"
                                fill="#34A853" />
                            <path
                                d="M41.44 21.411l-11.023-6.35c-4.916-2.828-11.195-1.152-14.03 3.751L3.163 41.663C-3.347 52.91.513 67.298 11.79 73.79l8.392 4.832l10.177 5.863l4.416 2.541c-7.84-5.248-10.33-15.765-5.536-24.047l3.424-5.915l12.54-21.666c2.828-4.89 1.145-11.157-3.765-13.986z"
                                fill="#4285F4" />


                        </svg>

                        {/* <!-- Paytm logo --> */}
                        <img alt='' style={{ height: "20px", marginLeft: "3%" }}
                            src="https://vtlogo.com/wp-content/uploads/2020/10/paytm-vector-logo.png" />

                        {/* <!-- Amazon Pay --> */}
                        <img alt='' style={{ height: "15px", marginLeft: "3%", marginTop: "1%" }} src={amazon} />

                        {/* <!-- Phone Pe --> */}
                        <img alt='' style={{ height: "20px", marginLeft: "2.5%", marginTop: "0%" }} src={phonepe} />

                        {/* style={{height: "20px", marginLeft: "3%", marginTop: "1%"}}  */}


                    </div>

                    <br />

                </div>

            </Drawer>


            <Snackbar
                open={open}
                onClose={handleClose}
                message="Scan the QR code to pay"
                action={action}
            />
        </Container >
    )
}

export default Cart

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    margin-top: 5%;
    ${mobile({ padding: "10px", marginTop: "15%" })}

`


const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    /* if TopButton props is filled then put border as none */
    border:${(props) => props.type === "filled" && "none"
    };

    /* if TopButton props is filled then put bg color as black else transparent */
    background-color:${(props) => props.type === "filled" ? "black" : "transparent"};
    color:${(props) => props.type === "filled" && "white"};

    transition: all 0.5s ease-out;


    &:hover{
        background-color: #000000;
        color: white;
    }

`

const TopTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-left: 8%;
    ${mobile({ display: "none" })}

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`



const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`

const Info = styled.div`
    flex:3;
    margin-bottom: 3%;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column", marginBottom: "20%", marginTop: "10%" })}

`


const ProductDetail = styled.div`
    flex:2;
    display: flex;

`


const Image = styled.img`
    width: 200px;
`


const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`


const PriceDetail = styled.div`
    flex:1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`



const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    margin-left: 13%;
    ${mobile({ margin: "5px 15px" })}

`



const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "0px" })}

`



const ProductName = styled.span``


const ProductId = styled.span``


// const ProductColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color:${props => props.color};
// `


const ProductSize = styled.span``


// const Hr = styled.hr`
//     background-color: whitesmoke;
//     border: none;
//     height: 2px;
// `

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin:30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-weight: ${props => props.type === "total" && "24px"};

`


const SummaryItemText = styled.span``


const SummaryItemPrice = styled.span``


const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`