import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { removeFromCart } from '../redux/cartRedux'
import { mobile } from '../responsive'
import { useHistory } from 'react-router-dom';


function Cart() {
    // to fetch data from Redux
    const cart = useSelector(state => state.cart)

    let total = 0

    // remove from cart function which will take product which clicked
    const dispatch = useDispatch()

    const handleRevomeFromCart = (product) => {
        dispatch(removeFromCart(product))
    }


    const history = useHistory();
    const handleContinueShoppingCLick = () => {
        history.push("/");
    }

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
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
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

                        <Button>CHECKOUT NOW</Button>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    margin-top: 5%;
    ${mobile({ padding: "10px",marginTop: "15%" })}

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
    ${mobile({ flexDirection: "column" })}

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


const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${props => props.color};
`


const ProductSize = styled.span``


const Hr = styled.hr`
    background-color: whitesmoke;
    border: none;
    height: 2px;
`

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











