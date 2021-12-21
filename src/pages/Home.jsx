import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

function Home() {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`
    &::-webkit-slider-thumb {
    -webkit-appearance: none;
}
`
