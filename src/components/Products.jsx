import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { mobile } from '../responsive'

function Products() {
    
    return (
        <Container id="products">
            {popularProducts.map(item => (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    )
}

export default Products

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${mobile({ paddingTop:"17%" })}

`