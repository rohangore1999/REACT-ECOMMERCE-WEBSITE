import React from 'react'
import styled from 'styled-components';
import {categories} from "../data";
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

function Categories() {
    return (
        <>
        <div style={{marginTop:"-7.8%"}} className='toSetcategory'></div>
        <Container id="categories">
            {categories.map(item=>(
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
        </>
    )
}

export default Categories


const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
    padding-top: 7%;
    ${mobile({ padding: "0px", flexDirection:"column", paddingTop: "17.5%" })}

`