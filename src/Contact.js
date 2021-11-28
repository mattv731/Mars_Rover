import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding: 50px;`

const StyledEmail = styled.a`
text-decoration: none;
color: black;
font-size: 1.2rem;
`



const Contact = () => {
    return (
        <StyledDiv>
            <h2>Contact Us</h2>
            <StyledEmail href="mailto:marsmail@email.com?
            subject=Contact from Mars Website" >Click here to email
                
            </StyledEmail>
        </StyledDiv>
    )
}
export default Contact