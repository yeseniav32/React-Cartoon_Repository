import React from "react";
// Style Code Imports \\
import { styled } from '@mui/system';
import { Button } from '@mui/material'
import cartoon_image from '../../assets/images/cartoon_network.jpg';
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const Root = styled("div",{
    name: 'Root',
    slot: 'Wrapper'
})({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled(Link)( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${cartoon_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

export const Home = ( props:Props) => {
 
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to="/">Cartoon Network</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to="/">Home</NavA>
                    </li>
                    <li>
                        <NavA to="/dashboard">About</NavA>
                    </li>
                    <li>
                        <NavA to="/signin">Learn More</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p> 90's cartoons are the best!</p>
                    <Button color='primary' variant='contained'>Check them out</Button>
                </MainText>
            </Main>

        </Root>
    )
}