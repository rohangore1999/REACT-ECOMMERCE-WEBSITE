import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { mobile } from '../responsive'


function ProductList() {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Title>Fruits</Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>

                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                    </Select>

                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                    </Select>

                </Filter>

                <Filter>
                    <FilterText>Sort Products: </FilterText>

                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>

            </FilterContainer>

            <Products />
            <Footer />
        </Container>
    )
}

export default ProductList

const Container = styled.div``


const Title = styled.h1`
    margin: 20px;

`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`


const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "2px 21px", display: "flex", flexDirection: "column" })}

`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px"})}

`

const Select = styled.select`
    padding: 20px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0"})}
`


const Option = styled.option``
