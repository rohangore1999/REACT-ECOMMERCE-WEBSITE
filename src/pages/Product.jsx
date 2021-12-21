import { Add, Remove } from '@material-ui/icons'
import { React, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { popularProducts } from '../data'
import { useLocation } from 'react-router-dom'
import { IconButton } from '@material-ui/core'

import { addProduct } from '../redux/cartRedux'

// useDispatch to store data in redux store
import { useDispatch, useSelector } from 'react-redux'



function Product() {
    const location = useLocation();
    const name = location.pathname.split("/")[2]

    console.log(name)
    const filteredData = popularProducts.filter(item => item.name === name)
    const product = filteredData[0]

    const [quantity, setquantity] = useState(1)

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setquantity(quantity - 1)
        } else {
            setquantity(quantity + 1)

        }
    }

    const dispatch = useDispatch()


    // fetching existed data
    console.log("FETCING DATA from redux >>>")
    const cart = useSelector(state => state.cart)
    console.log("FETCING DATA from redux >>>", cart)

    const handleClick = () => {
        if (cart.products.length > 0) {
            // means there is some data
            const inCart = cart.products.find((prod)=> prod.id === product.id)
            console.log("inCart >>>", inCart)

            // console.log("cart.products.quantity >>> ", cart.products[inCart.id].quantity)
            // console.log("existing quantity >>> ", cart.quantity)
            // let quant = cart.products[0].quantity + quantity
            // console.log("after adding >>> ", quant)
            // setquantity(cart.quantity)
            // console.log("AFTR FETCHING QUANTITY >>> ", quantity)
            
        }
        console.log("AFTR FETCHING QUANTITY >>> ", quantity)

        console.log("product >>> ", product)
        product.qty += quantity
        console.log("product.qty >>> ", product.qty)




        // update redux store
        dispatch(
            // ...product >>> its spread operator; it will send all the fields which are present in product object
            addProduct({ ...product, quantity })
        )
        console.log("dis quantity", quantity)
    }
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={filteredData[0].img} />
                </ImgContainer>

                <InfoContainer>
                    <Title>{filteredData[0].name}</Title>

                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi rem. Consequatur recusandae, minima exercitationem dignissimos magnam quo. Quae officiis, nam hic iusto nesciunt non aliquam accusantium. Inventore earum molestiae corrupti nihil!</Desc>

                    <Price>{product.price} Rs</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>

                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <IconButton onClick={() => handleQuantity("dec")}>
                                <Remove />
                            </IconButton>

                            <Amount>{quantity}</Amount>

                            <IconButton onClick={() => handleQuantity("inc")} >
                                <Add />
                            </IconButton>
                        </AmountContainer>

                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Product

const Container = styled.div``


const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column", marginTop:"10%" })}

`


const ImgContainer = styled.div`
    flex: 1;
`


const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({ height: "40vh" })}

`


const Title = styled.h1`
    font-weight: 200;
`


const Desc = styled.p`
    margin: 20px 0px;
`


const Price = styled.p`
    font-weight: 100;
    font-size: 40px;
`


const InfoContainer = styled.span`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}


`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`


const Filter = styled.div`
    display: flex;
    align-items: center;
`


const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`


const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`


const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`


const FilterSizeOption = styled.option``


const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`


const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

    .MuiSvgIcon-root {
        cursor: pointer;
    }

`


const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 23px;
`


const Button = styled.button`
    background-color: white;
    padding: 15px;
    border:2px solid teal;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease-out;


    &:hover{
        background-color: #000000;
        color: white;
    }

`




