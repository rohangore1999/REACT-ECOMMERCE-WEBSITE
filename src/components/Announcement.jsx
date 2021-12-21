import React from 'react'
import styled from 'styled-components'

function Announcement() {
    return (
        <Container id="home">
            Super Deals for POSRIKARS !!!
        </Container>
    )
}

export default Announcement

const Container = styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight:500;
    letter-spacing: 3px;

`;