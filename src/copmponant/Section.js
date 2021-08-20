import React from 'react'
import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from 'react-reveal/Fade';
const Section = ({title,description,bgImg,leftBtnText,rightBtnText}) => {
    return (
        <Container bgImage={bgImg}>
            <div style={{flexGrow: '1'}}>
            <Fade  bottom>
            <ItemText>
                <h1 style={{marginBottom:"10px"}}>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            </div>
            <ButtonGroup>
                <Fade bottom>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {
                        rightBtnText &&   <RightButton>{rightBtnText}</RightButton>
                        }
                </Fade>
            </ButtonGroup>
            <ExpandMoreIcon className="down-arrow"/>
        </Container>
    )
}

export default Section


const Container = styled.div`
    background-color: blue;
    width: 100%;
    min-height: 100vh !important;
    background-image: ${props => `url("${props.bgImage}")`};
    background-postion: center;
    background-size: cover;
    background-repeat: no-reapet;
    display:flex;
    flex-direction: column;
    align-items: center;
`; 

const ItemText = styled.div`
    margin-top: 15vh;
    text-align: center;
    flex-grow: 1;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 10px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    color: #fff;
    height: 40px;
    width: 256px;
    border-radius: 100vw;
    display: grid;
    place-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;
    cursor: pointer;
    font-weight: bold;
`;

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: #000;
    opacity: 0.65;
`;