import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive';

function Slider() {

    const [slideIndex, setslideIndex] = useState(0);

    const handleClick = (direction) => {
        // if the direction which we received from arrow btn;
        // if left; then check if is the leftmost slide(which is 0) not then decrement the index means move to left slide else go back to rightmost slide

        
        if(direction === 'left'){
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else {
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            {/* if you are passing parameter then should pass as an arrow function */}
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} alt="" />
                        </ImgContainer>

                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Decs>{item.desc}</Decs>
                            <Button>SHOP NOW</Button>

                        </InfoContainer>
                    </Slide>
                ))}


            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 4%;
    ${mobile({ display: "none" })}

`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    /* if 0 means 1st slide; 1 means 2nd slide; 2 means 3rd slide */
    /* 0, -100, -200 */
    /* here we are receiving the props from wrapper and do the following */
    transform: translateX(${props=> props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;

    background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    
`

const Image = styled.img`
    height: 80%;
    object-fit: contain;
`

const Title = styled.h1`
    font-size: 70px;
`


const Decs = styled.p`
    margin:50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`


const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.5s ease-out;
    letter-spacing: 3px;


    &:hover{
        background-color: #000000;
        color: white;
    }
`



const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`


const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ddd7d7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;

    /* as for Arrow container we have passed direction as a props */
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};

    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;

    transition: all 0.5s ease-out;

    &:hover{
        opacity: 1;
        background-color: #000000;
        color: #ffffff;
    }
`