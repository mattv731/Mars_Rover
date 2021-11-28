import styled from 'styled-components';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '25px',
    display: 'flex',
}

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
`


const StyledHeader = styled.header`
    background-color: #282c34;
    color: white;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    width: 100vw;
    padding: 17px;

`

const Header = () => {
    return (
        <StyledHeader>
            <h4>Mars Rock Formations</h4>
            <StyledNav>
                <Link to={'/'} style={linkStyle}>Home</Link>
                <Link to={'/about'} style={linkStyle}>Fun Facts</Link>
                <Link to={'/contact'} style={linkStyle}>Contact</Link>
            </StyledNav>
        </StyledHeader>
    )
}
export default Header;