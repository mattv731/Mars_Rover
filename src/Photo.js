import styled from 'styled-components'

    const StyledImg = styled.img`
    display: flex;
    flex-direction: row;
    width: 15rem;
    padding: 10px;
`

    const StyledDiv = styled.div`
    display: flex;
    justify-content: space-evenly;`

const Photos = (props) => {

    return (
        <StyledDiv>
            <StyledImg src={props.data.img_src} />
            <p>This photo was taken with the {props.data.camera.full_name} ({props.data.camera.name}) camera on the Mars Rover</p>
        </StyledDiv>
    )
}
export default Photos;