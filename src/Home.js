import React, { useState, useEffect } from 'react';
import Photo from './Photo'
import axios from 'axios';
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
width: 1200px;
margin: 50px;
padding: 10px auto;

`
const StyledH3 = styled.h3`
margin: 20px 0 10px`

const Home = () => {
    const [ photo, setPhoto ] = useState('')

useEffect( () => {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=WnIQ9X2dt6H6A3zTOii6MKCZC40hlHt0R5JpHSXA')
    .then(resp => {
        setPhoto(resp.data.photos)
        console.log(resp.data.photos.forEach(item => {
            
        }))
    })
    .catch(err => {
        console.error(err)
    })
}, []);

    return (
        <div>
            <StyledH3> Images captured from the Mars Rover</StyledH3>
            <StyledDiv>
            { photo !== '' ? photo.map(item => (
                <Photo data={item} />)) : 'Loading Mars Photos'
            }
            </StyledDiv>
        </div>
    )
}
export default Home;