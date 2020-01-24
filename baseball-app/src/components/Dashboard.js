import React from 'react'
import styled from 'styled-components'

export default function Dashboard(props) {
    const Button = styled.button`
        width: 10%
        background-color: white;
        color: black;
        height: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-radius: 12px;
    `
    const ButtonsContainer = styled.div`
        width: 90%;
        margin-left: 5%;
        background-color: black;
        display: flex;
        justify-content: space-around; 
    `
  return (
    <ButtonsContainer>
        <Button className="button" onClick={props.hit}>Hit</Button>
        <Button className="button" onClick={props.strike}>Strike</Button>
        <Button className="button" onClick={props.ball}>Ball</Button>
        <Button className="button" onClick={props.foul}>Foul</Button>
        <Button className="button" onClick={props.inning}>Inning </Button>
        <Button className="button" onClick={props.out}>Out </Button>
    </ButtonsContainer>
  )
}