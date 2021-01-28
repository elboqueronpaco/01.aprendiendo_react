import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 64px;
    background-color: blueviolet;
    @media screen and (min-width: 1024px) {
        bottom: calc(100% - 64px);
    }
`
export const HeaderContainer = styled.section`
    padding: 0 .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Navbar = styled.section`
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 64px;
    left: 0;
    right: 0;
    background-color: blue; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    transform: ${({openMenu}) => openMenu ? 'translate(0, 0)' : 'translate(100%, 100%)'} ;
    transition: all .5s ease-in-out;
    @media screen and (min-width: 1024px){
        position: static;
        width: auto;
        transform: translate(0, 0);
        flex-direction: row;
        background-color: transparent;
    }
    nav{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-evenly;
        margin-bottom: 2rem;
        @media screen and (min-width: 1024px) {
            flex-direction: row;
            justify-content: space-evenly;
        }
    }

`
export const MenuLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 1rem;
`
export const Logo = styled.h1`
    color: white;
    font-weight: 300;
    span{
        color: gold;
    }
`
export const ButtonMenu = styled.button`
    border: 2px solid white;
    border-radius: 50%;
    background-color: transparent;
    font-size: 1.25rem;
    padding: .75rem;
    color: gold;
    cursor: pointer;
    &::focus{
        outline: 0;
    }
    outline: none;
    @media screen and (min-width: 1024px) {
       display: none;
    }
`