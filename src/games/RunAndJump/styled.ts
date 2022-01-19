import styled from 'styled-components'

export const StyledGameBox = styled.section`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background-color: hsl(225, 80%, 78%);
    outline: 0.2rem solid white;
    flex-grow: 1;
`

export const StyledGrass = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    background-color: hsl(120, 50%, 45%);

    &.game-over { background-color: hsl(0, 50%, 45%); }
    &.start-screen { background-color: hsl(224, 50%, 45%); }
`